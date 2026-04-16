export function loader(text, validate) {
            document.querySelector('.p-loader').textContent = text
            console.log(validate)
            let loadCircle = document.querySelector('#c-loader')

            if (validate == 0) {
                loadCircle.classList.remove("c-complete")
                loadCircle.classList.add("c-loader")
            } else if (validate == 1) {

                loadCircle.classList.remove("c-loader")
                loadCircle.classList.add("c-complete")
            } else if (validate == 2) {
                loadCircle.classList.remove("c-loader")
            }
        }