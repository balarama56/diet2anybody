/**
 * Caps the floating WhatsApp SVG when Tailwind hasn’t loaded yet (PSI filmstrip / slow CSS).
 * Does not style the anchor — avoids beating `.md:*` utilities with `#id` specificity.
 */
export default function CriticalFallbackStyles() {
  const css = `
#whatsapp-float-btn svg{
  display:block;
  width:26px;
  height:26px;
  max-width:min(26px,18vw);
  max-height:min(26px,18vw);
}
@media (min-width:768px){
  #whatsapp-float-btn svg{
    width:30px;
    height:30px;
    max-width:min(30px,18vw);
    max-height:min(30px,18vw);
  }
}
`.replace(/\s+/g, ' ')

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}
