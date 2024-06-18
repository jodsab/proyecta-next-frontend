import { useState, useRef, useEffect } from "react";
import { Spin, theme, Typography, notification } from "antd";
import { Formik, Field, Form } from "formik";
import ErrorMessage from "./Error";
import ModalResponse from "@/components/core/ModalResponse/ModalResponse";
import { AiOutlineArrowRight } from "react-icons/ai";
import TRCaptcha from "@/components/core/Captcha/Captcha";
import RecaptchaService from '../../../api/recaptcha'
import ResendService from "@/api/resend";
import HubSpotService from "@/api/hubspot";
import validationSchema from './validationSchema';
import { formatDate } from "@/shared/functions/formatDates";
import "./styles.scss";

const RESPONSES = {
  valid: {
    status: "success",
    subTitle: "Gracias por contactarte con nosotros, en las próximas 48 horas nos pondremos en contacto contigo."
  },
  captchaError: {
    status: "warning",
    subTitle: "Hubo un error con el Captcha, por favor refresca la página."
  },
  resendError: {
    status: "warning",
    subTitle: "Hubo un error al registrarte relacionado con el servicio de mensajería, es posible que la mensajería no esté disponible."
  },
  hubSpotError: {
    status: "warning",
    subTitle: "Existe un error relacionado a HubSpot, es posible que tu usuario ya se encuentre registrado en nuestra base de datos"
  }
}


const TRForm = () => {

  const [registered, setRegistered] = useState(false);
  const [messageRegister, setMessageRegister] = useState("¡Estas a unos pasos de tu primer lote!");
  const [loading, setLoading] = useState(false);
  const [human, setHuman] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ status: 'success', subTitle: '' });

  const completarForm = async (values) => {
    try {
      setLoading(true);
      const rsp = await validarCaptcha(human);
      if (rsp.success) {
        const rspHubSpot = await HubSpotService.newContact({ properties: { email: values.email, firsName: values.nombre, lastname: values.apellido, phone: values.telefono, company: "Innova WEB", website: "https://www.inmobiliariaproyectainnova.com/", lifecyclestage: "lead" } })
        if (rspHubSpot.status === 'error') {
          setModalInfo(RESPONSES.hubSpotError)
        } else {
          const rsp = await ResendService.sendFormRegistro(values);
          if (!rsp.error) {
            setModalInfo(RESPONSES.valid)
          } else {
            setModalInfo(RESPONSES.resendError)
          }
        }
      } else {
        setModalInfo(RESPONSES.captchaError);
      }
      setIsModalOpen(true)
    } catch (error) {
      console.log("error", error)
    } finally {
      setLoading(false);
    }

  }

  const validarCaptcha = async (captcha) => {
    const rsp = await RecaptchaService.tryCaptcha(captcha)
    return rsp;
  }

  return (
    <div>
      {
        isModalOpen && <ModalResponse isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} status={modalInfo.status} tittle="Proyecto Innova Trasciende SAC" subTitle={modalInfo.subTitle} />
      }
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
                  fecha: formatDate(new Date()),
                  nombre: "",
                  apellido: "",
                  email: "",
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
                            id="DNI"
                            name="DNI"
                            placeholder="DNI/CE"
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

                      <button className="button_super" type="submit">
                        {
                          loading ? <Spin /> : <div className="submit_button">
                            <p className="mediumText bold">Solicitar información</p>
                            <AiOutlineArrowRight size={30} />
                          </div>
                        }
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
    </div>
  );
};

export default TRForm;
