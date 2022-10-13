import {useState} from "react"
import ContactForm from "../components/ContactForm"

const Contact: React.FC = () => {
  const [sending, setSending] = useState(false)

  return <ContactForm sending={sending} onSend={setSending} />
}
export default Contact
