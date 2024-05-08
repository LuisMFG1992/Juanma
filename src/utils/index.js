// const form = useRef()

// const sendEmail = (e) => {
//   e.preventDefault()

//   emailjs
//     .sendForm(
//       'service_tq8k65i',
//       'template_gnzo9tr',
//       form.current,
//       'DuN_3yr7llXMfFFnE'
//     )
//     .then((res) => {
//       if (res.status !== 200) toast.error('Error sending message.')

//       toast.success('Message sent.')
//     })
//     .catch(() => toast.error('Error sending message.'))

//   form.current.reset()
// }

// <form
// className="w-[80%] min-w-[236px] max-w-[400px]"
// ref={form}
// onSubmit={sendEmail}
// >

// </form>
