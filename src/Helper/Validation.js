import * as yup from 'yup';
export const timeSchema = yup.object().shape({
    name:yup
        .string()
        .required("error"),
    site:yup
        .string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        .required('Please enter website'),
    players:yup
        .array()
        .of(
            yup.object().shape
            ({
            name: yup.string().required(),
            nationality: yup.string().required(),
            age:yup.string().required(),
            playerKey:yup.string().required(),
            }).required()),
    description:yup
        .string(),
    type:yup
        .string()
        .required(),
    formation:yup
        .string()
        .required(),
    tags:yup
        .array()
        .of(
            yup.string()
        ),     
});