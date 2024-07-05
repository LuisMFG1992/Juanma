const contactFormSchema = [
  {
    id: 'name',
    name: 'Name',
    inputType: 'text',
    require: true,
    colSpan: 'md:col-span-1'
  },
  {
    id: 'company',
    name: 'Company',
    inputType: 'text',
    require: true,
    colSpan: 'md:col-span-1'
  },
  {
    id: 'email',
    name: 'Email',
    inputType: 'email',
    require: true,
    colSpan: 'md:col-span-1'
  },
  {
    id: 'phone',
    name: 'Phone',
    inputType: 'tel',
    require: true,
    colSpan: 'md:col-span-1'
  },
  {
    id: 'subject',
    name: 'Subject',
    inputType: 'text',
    require: true,
    colSpan: 'md:col-span-2'
  },
  {
    id: 'message',
    name: 'Message',
    inputType: 'textArea',
    required: true,
    colSpan: 'md:col-span-2'
  }
]

const homeFormSchema = [
  {
    id: 'name',
    name: 'Name',
    inputType: 'text',
    required: true
  },
  {
    id: 'company',
    name: 'Company',
    inputType: 'text',
    required: true
  },
  {
    id: 'email',
    name: 'Email',
    inputType: 'email',
    required: true
  },
  {
    id: 'phone',
    name: 'Phone',
    inputType: 'tel',
    required: true
  },
  {
    id: 'subject',
    name: 'Subject',
    inputType: 'text',
    required: true
  },
  {
    id: 'message',
    name: 'Message',
    inputType: 'textArea',
    required: true
  }
]

export { contactFormSchema, homeFormSchema }
