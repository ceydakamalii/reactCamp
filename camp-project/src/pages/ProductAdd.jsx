import React from 'react'
import { Formik, Form ,Field,ErrorMessage} from 'formik'
import * as Yup from "yup"
import {FormField,Button,Label} from "semantic-ui-react"
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'
import ProductService from '../services/productService'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }//formun ilk değeri

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatu zorunlu")
    })

    return (
       
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit= {(values)=>{
                    let productService=new ProductService()
                    productService.addProducts(values).then(response => console.log(response.data.message))
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <KodlamaIoTextInput name="productName" placeholder="Ürün adı"/>
                    <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
            
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
    )
}
