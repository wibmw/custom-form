# Custom Form

An Easy React Customizable Form

[![NPM version][npm-image]][npm-url]

## 🚀 Getting Started

Using [`yarn`]():

```bash
yarn add @wibmw\custom-form
```

## ✨ Usage

How to use `CustomInput` or `CustomSelect` in your project:

```javascript
import {CustomInput, CustomSelect }from 'custom-form'

export default () => {
  // Form Sate
  const [formState, setFormState] = useState(initForm),
  const Options = [
    { value: '', text: '--Choose an option--' },
    { value: 'sales', text: 'Sales' },
    { value: 'marketing', text: 'Marketing' },
  ]
  // Form Validation and Store in the database
  const save = (event) => {
      const fieldsNumber = Object.keys(formState).filter((fieldName) => fieldName.includes('Valid')).length,
        countValid = Object.values(formState).filter(Boolean).length / 2,
        element = event.target

      if (fieldsNumber === countValid) {
        // If all fields are valid then create the employee and open the modal
        clearValidationMessage(element)
        createNewEmployee(formState)
      } else {
        // Else show an error message
        setValidationMessage(element, 'The form is not fullfilled correctly')
      }
    }
  return (
   <>
      {/** *********** Page ******************/}
      <main className='...'>
        <section className='...'>
          {/** *********** Form ******************/}
          <form>
            {/** *********** Firstname Input ******************/}
            <Input
                name='firstName'
                label='First Name'
                regexp={/^[a-zA-Zéèàçùê -]{2,50}$/}
                message='Invalid First Name !'
                setFormState={setFormState}
                type='text' // or 'date' for a datepicker
            />
            {/** *********** State Selelct ******************/}
            <CustomSelect
                name='state'
                label='State'
                options={stateOptions}
                message='Invalid State !'
                setFormState={setFormState}
            />
            {/** *********** Button ******************/}
            <div onClick={async (e) => {await save(e)}} >
              Save
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

const initForm = {
  firstName: '',
  state: '',
  isFirstNameValid: false,
  isStateValid: false,
}

```

## 📌 Input Props

| Prop           | Type                                        | Default | Required |
| -------------- | ------------------------------------------- | ------- | -------- |
| `name`         | String                                      |         | Yes      |
| `label`        | String                                      |         | Yes      |
| `regexp`       | RegExp                                      |         | Yes      |
| `message`      | String                                      |         | No       |
| `type`         | String                                      |         | Yes      |
| `setFormState` | React.Dispatch<React.SetStateAction<IForm>> |         | Yes      |

## 📌 Select Props

| Prop           | Type                                        | Default | Required |
| -------------- | ------------------------------------------- | ------- | -------- |
| `name`         | String                                      |         | Yes      |
| `label`        | String                                      |         | Yes      |
| `message`      | String                                      |         | No       |
| `options`      | [{value, text}]                             |         | Yes      |
| `setFormState` | React.Dispatch<React.SetStateAction<IForm>> |         | Yes      |

## ✌️ License
[MIT](https://opensource.org/licenses/MIT)

[npm-url]: https://www.npmjs.com/package/@wibmw/custom-form
