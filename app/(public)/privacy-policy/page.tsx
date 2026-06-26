export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[var(--surface)] py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)]">
          Política de Privacidad y Protección de Datos Personales
        </h1>

        <p className="mt-4 text-[var(--muted)]">
          En cumplimiento de la Ley N.° 29733 – Ley de Protección de Datos
          Personales y su Reglamento, RBIOMEDICS S.A.C. informa lo siguiente:
        </p>

        <div className="mt-10 space-y-8 text-[var(--muted)] leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)]">
              1. Titular del banco de datos personales
            </h2>
            <p className="mt-2">
              El titular del banco de datos personales es RBIOMEDICS S.A.C., con
              domicilio en Perú. La empresa es responsable del tratamiento de
              los datos personales recopilados a través de su sitio web y otros
              canales de comunicación.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)]">
              2. Finalidad del tratamiento de datos
            </h2>
            <p className="mt-2">
              Los datos personales proporcionados por los usuarios serán
              tratados para las siguientes finalidades:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>
                Atender consultas, solicitudes de información y cotizaciones.
              </li>
              <li>Gestionar reclamos a través del Libro de Reclamaciones.</li>
              <li>Brindar soporte técnico y comercial.</li>
              <li>Mejorar la calidad de nuestros servicios.</li>
              <li>Cumplir obligaciones legales aplicables.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)]">
              3. Base legal para el tratamiento
            </h2>
            <p className="mt-2">
              El tratamiento de datos personales se realiza con el
              consentimiento libre, previo, expreso e informado del titular de
              los datos, conforme a la Ley N.° 29733.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)]">
              4. Transferencia de datos personales
            </h2>
            <p className="mt-2">
              RBIOMEDICS S.A.C. no vende, alquila ni transfiere datos personales
              a terceros, salvo que sea necesario para el cumplimiento de
              obligaciones legales o la prestación de servicios tecnológicos
              (por ejemplo, proveedores de correo electrónico o hosting).
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)]">
              5. Conservación de los datos
            </h2>
            <p className="mt-2">
              Los datos personales serán conservados únicamente durante el
              tiempo necesario para cumplir con las finalidades para las cuales
              fueron recopilados o mientras exista una relación contractual o
              comercial vigente.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)]">
              6. Derechos del titular de datos personales
            </h2>
            <p className="mt-2">
              El titular de los datos personales puede ejercer sus derechos
              ARCO:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>
                <strong>Acceso:</strong> conocer qué datos personales se están
                tratando.
              </li>
              <li>
                <strong>Rectificación:</strong> solicitar la corrección de datos
                inexactos.
              </li>
              <li>
                <strong>Cancelación:</strong> solicitar la eliminación de sus
                datos.
              </li>
              <li>
                <strong>Oposición:</strong> oponerse al tratamiento de sus
                datos.
              </li>
            </ul>

            <p className="mt-3">
              Para ejercer estos derechos, puede escribirnos a:{" "}
              <strong>gerencia@rbiomedics.com</strong>
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)]">
              7. Seguridad de la información
            </h2>
            <p className="mt-2">
              RBIOMEDICS S.A.C. adopta medidas técnicas, organizativas y legales
              necesarias para garantizar la seguridad, confidencialidad e
              integridad de los datos personales y evitar su alteración, pérdida
              o acceso no autorizado.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)]">
              8. Uso de cookies
            </h2>
            <p className="mt-2">
              Este sitio web puede utilizar cookies con fines estadísticos y de
              mejora de la experiencia del usuario. Las cookies no almacenan
              información personal sensible.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)]">
              9. Modificaciones de la política
            </h2>
            <p className="mt-2">
              RBIOMEDICS S.A.C. se reserva el derecho de modificar la presente
              Política de Privacidad en cualquier momento, informando los
              cambios a través del sitio web.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--primary-dark)]">
              10. Contacto
            </h2>

            <p className="mt-2">
              Para cualquier consulta relacionada con esta Política de
              Privacidad o el tratamiento de sus datos personales, puede
              comunicarse con nosotros:
            </p>

            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>ventas@rbiomedics.com</li>
              <li>gerencia@rbiomedics.com</li>
              <li>+51 961 446 461</li>
              <li>RBIOMEDICS S.A.C. – Perú</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
