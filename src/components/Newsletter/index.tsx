import { FormEvent, useRef } from "react";
import * as S from './styled'


export function Newsletter() {

   const form = useRef(null)
   const success = useRef(null)

   const apiUrl = 'https://corebiz-test.herokuapp.com/api';

   const submitForm = (ev: any) => {
      const {
         name: { value: nameValue },
         email: { value: emailValue },
      } = ev.target.elements;
      const url = `${apiUrl}/v1/newsletter`;
      const data = {
         name: nameValue,
         email: emailValue,
      };
      fetch(url, {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data),
      })
         .then(r => r.json())
         .then(r => {
            showSuccess();
         })
         .catch(e => {
            console.log('error', e);
         })
      ev.preventDefault();
      return false;
   }

   const showSuccess = () => {
      const formulario = form.current as unknown as HTMLFormElement;
      formulario.style.display = 'none';
      const sucesso = success.current as unknown as HTMLFormElement;
      sucesso.style.display = 'flex';

   }

   const backToForm = () => {
      const sucesso = success.current as unknown as HTMLFormElement;
      sucesso.style.display = 'none';

      const formulario = form.current as unknown as HTMLFormElement;
      formulario.style.display = 'flex';
   }

   return (
      <S.NewsletterComponent>
         <S.Container>
            <S.Title>Paticipe de nossas news com promoções e novidades!</S.Title>
            <S.Form onSubmit={(ev: any) => submitForm(ev)} ref={form}>
               <S.ColAuto>
                  <S.Input name="name" type="text" placeholder="Digite seu nome" required />
               </S.ColAuto>
               <S.ColAuto>
                  <S.Input name="email" type="Email" placeholder="Digite seu email" required />
               </S.ColAuto>
               <S.ColAuto>
                  <S.Button type="submit">Eu quero!</S.Button>
               </S.ColAuto>
            </S.Form>

            <div ref={success} style={{ display: 'none' }}>
               <p>
                  Seu e-mail foi cadastrado com sucesso!
               </p>
               <p>
                  A partir de agora você receberá as novidade e ofertas exclusivas.
               </p>
               <button onClick={() => backToForm()}>
                  Cadastrar novo email
               </button>
            </div>
         </S.Container>
      </S.NewsletterComponent>
   );
}


