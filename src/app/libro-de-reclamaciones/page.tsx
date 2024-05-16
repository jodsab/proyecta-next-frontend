"use client";
import { useState, useEffect } from 'react';
import { Modal, Spin } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { Formik, Form, Field } from 'formik';
import InputError from '@/components/core/InputError/InputError';
import SignupSchema from './libroReclamacionesSchema';
import { IFormReclamo } from '@/types/Resend/formReclamo';
import TRCaptcha from '@/components/core/Captcha/Captcha';
import RecaptchaService from '@/api/recaptcha';
import ResendService from '@/api/resend';
import { formatDate } from '@/shared/functions/formatDates';
import ModalResponse from '@/components/core/ModalResponse/ModalResponse';
import logo from "../../assets/logo.png";
import "./index.scss";

const RESPONSES = {
  valid: {
    status: "success",
    subTitle: "Tu opinión es importante para nosotros, en menos de 15 días nos pondremos en contacto contigo."
  },
  captchaError: {
    status: "warning",
    subTitle: "Hubo un error con el Captcha, por favor refresca la página."
  },
  resendError: {
    status: "warning",
    subTitle: "Hubo un error al enviar mensaje, es posible que la mensajería no esté disponible."
  }
}

export default function LibroDeReclaciones() {

  const [human, setHuman] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ status: 'success', subTitle: '' });

  const validarCaptcha = async (captcha: string) => {
    const rsp = await RecaptchaService.tryCaptcha(captcha)
    return rsp;
  }

  const completarForm = async (values) => {
    try {
      setLoading(true);
      const rsp = await validarCaptcha(human);
      if (rsp.success) {
        const rsp = await ResendService.sendFormReclamo(values);
        if (!rsp.error) {
          setModalInfo(RESPONSES.valid)
        } else {
          setModalInfo(RESPONSES.resendError)
        }
      } else {
        setModalInfo(RESPONSES.captchaError);
      }
      setIsModalOpen(true)
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {
        isModalOpen && <ModalResponse isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} status={modalInfo.status} tittle="Proyecto Innova Trasciende SAC" subTitle={modalInfo.subTitle} />
      }
      <div className="libroDeReclamaciones_container">
        <div className='logo_container'>
          <div className='img_container'>
            <Link href={'/'}>
              <Image src={logo} alt='logo' />
            </Link>
          </div>
        </div>
        <div className='libroDeReclamaciones_content'>
          <p className='title_center'>Proyecta Innova Trasciende SAC con RUC Nº 20609903881, Domicilio legal en Av. Arequipa 1860, piso 2, Proyecto IQ OFICINAS LINCE.</p>
          <Formik
            initialValues={{
              fecha: formatDate(new Date()),
              hojaReclamacion: '',
              nombres: '',
              apellidoPaterno: '',
              apellidoMaterno: '',
              dni: '',
              telefono: '',
              domicilio: '',
              email: '',
              padresNombre: '',
              tipoDeServicio: '',
              monto: '',
              archivo: '',
              descripcion: '',
              reclamoOQueja: '',
              detalle: '',
              pedido: '',
              checkbox: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              completarForm(values)
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className='form_section'>
                  <h2 className='hoja_de_reclamaciones'>Hoja de reclamaciones</h2>
                  <div className='inactive_section'>
                    <div className='form_flex_inactive'>
                      <p>Fecha</p>
                      <InputError disabled placeholder="" name="fecha" errors={errors.fecha} touched={touched.fecha} style={{ textAlign: 'center' }} />
                    </div>
                    <div className='form_flex_inactive'>
                      <p>Hoja de reclamación</p>
                      <InputError disabled placeholder="" name="hojaReclamacion" errors={errors.hojaReclamacion} touched={touched.hojaReclamacion} style={{ textAlign: 'center' }} />
                    </div>
                  </div>

                </div>
                <p className='header_section'>Identificación del consumidor reclamante</p>
                <div className='form_section'>
                  <InputError placeholder="Nombres*" name="nombres" errors={errors.nombres} touched={touched.nombres} />
                  <div className='flex_form_reclamaciones'>
                    <InputError placeholder="Apellido Paterno*" name="apellidoPaterno" errors={errors.apellidoPaterno} touched={touched.apellidoPaterno} />
                    <InputError placeholder="Apellido Materno*" name="apellidoMaterno" errors={errors.apellidoMaterno} touched={touched.apellidoMaterno} />
                  </div>
                  <div className='flex_form_reclamaciones'>
                    <InputError placeholder="DNI/CE*" name="dni" errors={errors.dni} touched={touched.dni} />
                    <InputError placeholder="Teléfono*" name="telefono" errors={errors.telefono} touched={touched.telefono} />
                  </div>
                  <InputError placeholder="Domicilio*" name="domicilio" errors={errors.domicilio} touched={touched.domicilio} />
                  <InputError placeholder="E-mail" name="email" errors={errors.email} touched={touched.email} />
                  <InputError placeholder="Padre o madre (en caso de ser menor de edad)" name="padresNombre" errors={errors.padresNombre} touched={touched.padresNombre} />
                </div>
                <p className='header_section'>Identificación del bien contratado</p>
                <div className='form_section'>
                  <InputError placeholder="Producto/Servicio" name="tipoDeServicio" errors={errors.tipoDeServicio} touched={touched.tipoDeServicio} />
                  <InputError placeholder="Monto reclamado (Soles)" name="monto" errors={errors.monto} touched={touched.monto} />
                  <InputError placeholder="Archivo" name="archivo" errors={errors.archivo} touched={touched.archivo} type='file' accept="image/png, application/pdf" />
                  <InputError placeholder="Descripción* (máximo 500 caracteres)" name="descripcion" errors={errors.descripcion} touched={touched.descripcion} as='textarea' maxLength={500} style={{ resize: 'vertical' }} />
                </div>
                <p className='header_section'>Detalle de la reclamación y pedido del consumidor</p>
                <div className='form_section'>
                  <div className='area'>
                    <p><strong>Reclamo:</strong>Disconformidad relacionada a los productos o servicios.</p>
                    <p><strong>Queja:</strong>Disconformidad no relacionada a los productos o servicios; o, malestar o descontento a la atención al público.</p>
                  </div>
                  <InputError placeholder="Reclamo/Queja" name="reclamoOQueja" errors={errors.reclamoOQueja} touched={touched.reclamoOQueja} />
                  <InputError placeholder="Detalle* (máximo 500 caracteres)" name="detalle" errors={errors.detalle} touched={touched.detalle} as='textarea' maxLength={500} style={{ resize: 'vertical' }} />
                  <InputError placeholder="Pedido* (máximo 500 caracteres)" name="pedido" errors={errors.pedido} touched={touched.pedido} as='textarea' maxLength={500} style={{ resize: 'vertical' }} />
                </div>
                <p className='header_section'>Observaciones y acciones adoptadas por el proveedor</p>
                <p>Proyecta Innova Trasciende SAC dará respuesta a su reclamo/queja en un plazo no mayor a quince (15) días hábiles mediante correo electrónico o mediante una carta que se enviará a su domicilio.</p>
                <div className='checkbox_container'>
                  <InputError name="checkbox" errors={errors.checkbox} touched={touched.checkbox} type='checkbox' />
                  Declaro haber leído y aceptado el Tratamiento de mis Datos Personales. Declaro que los datos consignados son correctos y fiel expresión de la verdad.
                </div>
                <div className='captcha_container'>
                  <TRCaptcha setHuman={setHuman} />
                </div>
                <div className='submit_container'>
                  <button className='submit_button' type="submit">{loading ? <Spin /> : 'Enviar'}</button>
                </div>

              </Form>
            )}
          </Formik>
          <div>
            <p>*La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.</p>
            <p>*El proveedor debe dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles, el cual es improrrogable.</p>
          </div>
          <strong>Políticas de privacidad</strong>
        </div>
      </div>
    </div>

  );
}
