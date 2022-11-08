import { Field, ErrorMessage } from "formik";

export function FormField({ propsInput, className, name, label, type, ...rest }) {
    const { errors, touched } = propsInput
    return (
        <div className="mb-3">
            <label className="field-label" htmlFor={name}>
                {label}
            </label>
            <Field
                className={`form-field 
                    ${(errors[name] && touched[name]) ? "not-valid" : ""} 
                    ${(!errors[name] && touched[name]) ? "is-valid" : ""}
                    `}
                type={type}
                name={name}
                {...rest}
            />
            <ErrorMessage name={name}>
                {(errMesg) => <p className="field-error">{errMesg}</p>}
            </ErrorMessage>
        </div>
    )
}

export function FormSelect({ propsInput, className, name, label, type,children, ...rest }) {
    const { errors, touched } = propsInput
    return (
        <div className="mb-3">
            <label className="field-label" htmlFor={name}>
                {label}
            </label>
            <Field
                className={`form-field 
                    ${(errors[name] && touched[name]) ? "not-valid" : ""} 
                    ${(!errors[name] && touched[name]) ? "is-valid" : ""}
                    `}
                name={name}
                {...rest}
                as="select">
                    {children}
               </Field>
            <ErrorMessage name={name}>
                {(errMesg) => <p className="field-error">{errMesg}</p>}
            </ErrorMessage>
        </div>
    )
}

