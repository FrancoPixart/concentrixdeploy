import React from "react"
import Accordion from "../../components/accordion/Accordion"
import styleSecurity from "./../../styles/securityPage.module.css"
import image from "./../../assets/images/image.jpg"
import pc from "./../../assets/images/pc.png"

export const SecurityPage: React.FC = () => {
  return (
    <div className={styleSecurity.securityPage}>
      {/* <h2 className={styleSecurity.title}>Autorización de salida</h2> */}

      <div className={styleSecurity.containerComponents}>
        <Accordion
          title="Usuario"
          img={image}
          firstClass={styleSecurity.accordionFirstClass}
          secondClass={`${styleSecurity.accordionSecondClass} ${styleSecurity.accordionUser}`}
          name='Fran Fernandez'
          subtitle="DNI 123456789"
          children={
            <div className={styleSecurity.accordionContent}>
              <hr className={styleSecurity.accordionHr} />
              <h4 className={styleSecurity.subtitles}>Correo</h4>
              <p className={styleSecurity.paragraph} >pepepeorpeop@gmail.com</p>
              <hr className={styleSecurity.accordionHr} />
              <h4 className={styleSecurity.subtitles}>Telefono</h4>
              <p className={styleSecurity.paragraph}>1152689369</p>
            </div>
          }
        />

        <Accordion
          firstClass={`${styleSecurity.accordionFirstClass} ${styleSecurity.securityPermission}`}
          // firstClass={styleSecurity.accordionFirstClassSecurity}
          secondClass={`${styleSecurity.accordionSecondClass} ${styleSecurity.accordionPermission}`}
          name='Permiso de salida autorizada'
          children={
            <div className={styleSecurity.accordionContentSecurity}>
              <hr className={styleSecurity.accordionHr} />
              <p className={styleSecurity.authText}
              >
                <span id={styleSecurity.circleCheck} className="material-symbols-outlined">check_circle</span>
                Se autoriza la salida del dispositivo
              </p>

              {/* <hr className={styleSecurity.accordionHr} /> */}

              <div className={styleSecurity.infoPermission}>
                <p className={styleSecurity.infoText}>
                  El dispositivo debe ser devuelto en la fecha
                  acordada o según las indicaciones del propietario.
                </p>
                <p className={styleSecurity.infoText}>
                  El dispositivo cuenta con los permisos necesarios
                  para salir de las instalaciones.
                </p>
              </div>
            </div>
          }
        />

        <Accordion
          title="Dispositivo"
          img={pc}
          firstClass={styleSecurity.accordionFirstClass}
          secondClass={`${styleSecurity.accordionSecondClass} ${styleSecurity.accordionUser}`}
          name='DELL Gen 9 Intel (16")'
          subtitle="con RTX™ 4060"
          children={
            <div className={styleSecurity.accordionContent}>
              <hr className={styleSecurity.accordionHr} />
              <h4 className={styleSecurity.subtitles}>Numero de serie</h4>
              <p className={styleSecurity.paragraph}
              >
                6516VS1_65VFVS6SF
              </p>
              <hr className={styleSecurity.accordionHr} />
              <h4 className={styleSecurity.subtitles}>Etiqueta</h4>
              <p className={styleSecurity.paragraph}>00:55:6F:1C:8D:5B</p>
            </div>
          }
        />

        <Accordion
          title="Autorización"
          img={image}
          firstClass={styleSecurity.accordionFirstClass}
          secondClass={`${styleSecurity.accordionSecondClass} ${styleSecurity.accordionUser}`}
          name='Facundo Pavon'
          subtitle="DNI 56546849"
          children={
            <div className={styleSecurity.accordionContent}>
              <hr className={styleSecurity.accordionHr} />
              <h4 className={styleSecurity.subtitles}>Correo</h4>
              <p
                className={styleSecurity.paragraph}
              >
                facupavon@gmail.com
              </p>
              <hr className={styleSecurity.accordionHr} />
              <h4 className={styleSecurity.subtitles}>Fecha de autorización</h4>
              <p className={styleSecurity.paragraph}>13/08/2024</p>
              <hr className={styleSecurity.accordionHr} />
              <h4 className={styleSecurity.subtitles}>Firma</h4>
              <p className={styleSecurity.paragraph}>_________________</p>
            </div>
          }
        />

      </div>

    </div >
  )
}