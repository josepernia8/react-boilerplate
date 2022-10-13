import {Button, Label, Textarea, TextInput} from "flowbite-react"
import {ReactComponent as Mail} from "../../assets/mail.svg"
import "./index.css"

interface Props extends React.ComponentProps<"article"> {
  sending: boolean
  onSend: (_send: boolean) => void
}

const ContactForm: React.FC<Props> = ({sending, onSend}) => (
  <article className="contact-wrapper">
    <div className={`envelope ${sending ? "active" : ""}`}>
      <div className="back paper"></div>
      <div className="content">
        <div className={`form-wrapper ${sending ? "" : "border rounded border-gray-500"}`}>
          <form>
            <div className="top-wrapper">
              <div>
                <Label htmlFor="email" value="Your email" />
                <TextInput id="email" type="email" placeholder="name@gmail.com" required icon={Mail} />
              </div>
              <div className={`${sending ? "" : "pb-4 mt-4"}`}>
                <Label htmlFor="comment" value="Your message" />
                <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
              </div>
            </div>
            <div className="bottom-wrapper">
              <Button type="submit" onClick={() => onSend(true)}>
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="front paper" />
    </div>
  </article>
)

export default ContactForm
