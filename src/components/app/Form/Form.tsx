import { useState, useRef, useEffect } from "react";
import { Spin, theme, Typography, notification } from "antd";
import { Formik, Field, Form } from "formik";
import ErrorMessage from "./Error";
import { AiOutlineArrowRight } from "react-icons/ai";
import TRCaptcha from "@/components/core/Captcha/Captcha";
import RecaptchaService from '../../../api/recaptcha'
import UsersService from "@/api/users";
import validationSchema from './validationSchema';
import "./styles.scss";

const key = 'updatable';

const TRForm = () => {

  const [registered, setRegistered] = useState(false);
  const [messageRegister, setMessageRegister] = useState("¡Estas a unos pasos de tu primer lote!");
  const [rspRegister, setRspRegister] = useState('');
  const [loading, setLoading] = useState(false);
  const [human, setHuman] = useState(null);

  const completarForm = async (values) => {
    try {
      setLoading(true);
      const rsp = await validarCaptcha(human);
      if (rsp.success) {
        const formRsp = await UsersService.postNewUser(values);
        console.log('formRsp', formRsp)
        if (formRsp.success) {
          console.log('correcto')
          setRegistered(true);
          setMessageRegister("Registrado con exito, en breve uno de nuestros agentes se pondrá en contacto contigo.");
        } else {
          alert("Hubo un error al intentar registrarte");
        }
      } else {
        setMessageRegister("Hubo un error con el Captcha, por favor refresca la página.");
      }
    } catch (error) {

    } finally {
      setLoading(false);
    }

  }

  const validarCaptcha = async (captcha) => {
    const rsp = await RecaptchaService.tryCaptcha(captcha)
    return rsp;
  }

  return (
    <div className="trform">
      <div className="trform_container">
        <p className="bold bigText header">
          {messageRegister}
        </p>
        {
          registered && <p className="extra">
            Sigue navegando en nuestra web.
          </p>
        }
        {
          !registered && (loading ? <div className="loading_spinner_container"><Spin size="large" /> <p className="bigText bold">Registrandote en nuestra base de datos...</p></div> : <div>
            <Formik
              initialValues={{
                nombre: "",
                apellido: "",
                email: "",
                document_type: "",
                DNI: "",
                telefono: "",
                terms: false,
                politics: false,
              }}
              onSubmit={(values) => {
                completarForm(values);
              }}
              validationSchema={validationSchema}
            >
              {({ errors, touched }) => (

                < Form className="form">
                  <div className="form_content">
                    <div className="labels_and_errors">
                      <div className="names">
                        <Field
                          className="input_field"
                          id="nombre"
                          name="nombre"
                          placeholder="Nombres"
                        />
                        <Field
                          className="input_field"
                          id="apellido"
                          name="apellido"
                          placeholder="Apellidos"
                        />
                      </div>
                      {errors.nombre && touched.nombre ? (
                        <ErrorMessage error={errors.nombre} />
                      ) : null}
                      {errors.apellido && touched.apellido ? (
                        <ErrorMessage error={errors.apellido} />
                      ) : null}
                    </div>
                    <div className="labels_and_errors">
                      <div className="names">
                        <Field
                          className="input_field"
                          id="email"
                          name="email"
                          placeholder="Correo electrónico"
                          type="email"
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <ErrorMessage error={errors.email} />
                      ) : null}
                    </div>
                    <div className="labels_and_errors">
                      <div className="names">
                        <Field
                          className="input_field"
                          as="select"
                          id="document_type"
                          name="document_type"
                          placeholder="document_type"
                        >
                          <option value="dni">DNI</option>
                          <option value="chamo">Carné de extranjería</option>
                        </Field>
                        <Field
                          className="input_field"
                          id="DNI"
                          name="DNI"
                          placeholder="N° Documento"
                        />
                      </div>
                      {errors.DNI && touched.DNI ? (
                        <ErrorMessage error={errors.DNI} />
                      ) : null}
                    </div>
                    <div className="labels_and_errors">
                      <div className="names">
                        <Field
                          className="input_field"
                          id="telefono"
                          name="telefono"
                          placeholder="N° Celular"
                        />
                      </div>
                      {errors.telefono && touched.telefono ? (
                        <ErrorMessage error={errors.telefono} />
                      ) : null}
                    </div>
                    <div>
                      <div className="checkbox_and_errors">
                        <div className="terms_container">
                          <Field
                            className="input_field"
                            id="terms"
                            name="terms"
                            type="checkbox"
                          />
                          <p className="rights">
                            He leído y acepto los{" "}
                            <strong className="bold">Términos y Condiciones</strong>
                          </p>
                        </div>
                        {errors.terms && touched.terms ? (
                          <ErrorMessage error={errors.terms} />
                        ) : null}
                      </div>
                      <div className="checkbox_and_errors">
                        <div className="politics_container">
                          <Field
                            className="input_field"
                            id="politics"
                            name="politics"
                            type="checkbox"
                          />
                          <p className="rights">
                            He leído y acepto las
                            <strong className="bold"> Políticas de Privacidad</strong>
                          </p>
                        </div>
                        {errors.politics && touched.politics ? (
                          <ErrorMessage error={errors.politics} />
                        ) : null}
                      </div>

                    </div>
                    <div className="captcha_container">
                      <TRCaptcha setHuman={setHuman} />
                    </div>
                    <button className="submit_button" type="submit">
                      <p className="mediumText bold">Solicitar información</p>
                      <AiOutlineArrowRight size={30} />
                    </button>
                  </div>
                </Form>
              )
              }
            </Formik>
          </div>)
        }

      </div>
    </div >
  );
};

export default TRForm;
