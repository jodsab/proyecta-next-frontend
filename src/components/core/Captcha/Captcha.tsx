import ReCAPTCHA from 'react-google-recaptcha';

const TRCaptcha = ({ setHuman }) => {

  const onChange = (value) => {
    setHuman(value)
  }

  return (
    <>
      <ReCAPTCHA sitekey={`${process.env.NEXT_PUBLIC_ReCAPTCHA_SK}`} onChange={onChange} />
    </>
  )
}

export default TRCaptcha;