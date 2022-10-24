 <div class="infocontent4" id="Contacto">
            <h2>Contacto </h2>
                     <p>¿Le pareció interesante la información? <br>
                    A través de este formulario puedes enviarme un mensaje.</p>
                <form id="form" action="" class="">
                    <fieldset>
                    <legend>Mensaje</legend>
                    <p><label>Tu nombre: <input type="text" name="nombre"></label></p>
                    <p><label>Tu dirección de correo: <input type="text" name="correo"></label></p>
                    <p><label>Motivo: <input type="text" name="motivo"></label></p>
                    <p> <label>Tu mensaje:<br>
                    <textarea name="mensaje"></textarea>
                    </label>
                    </p>
                    </fieldset>
                    <p>
                    <input type="submit" value="Enviar mensaje" id="button">
                     <input type="reset" value="Comenzar de nuevo">
                     </p>
                </form>

                <a href="mailto:avilasofia076@gmail.com" id="truco"> </a>
             
        </div>

        

    </main>

    <footer> </footer>

    <script src="script.js"></script>
    <script src="javaScript/index.js"> </script>
    <script> 

        const $form = document.querySelector('#form' )
        const $mail = document.querySelector('#truco')

        $form.addEventListener('submit', handleSubmit)


        function handleSubmit(event) {
            event.preventDefault()
            const  form= new FormData(this)
            console.log(form.get('nombre'))
            $mail.setAttribute('href',`mailto: avilasofia076@gmail.com?subject=${form.get('nombre')}&{form.get('email')}&body=${form.get('mensaje')}`)
            $mail.click()
        }

    </script>