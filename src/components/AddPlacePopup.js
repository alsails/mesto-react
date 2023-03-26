import {useRef, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import '../index.css'

function AddPlacePopup({isOpened, onClose, onAddCard, status}) {
    const nameRef = useRef()
    const linkRef = useRef()

    const  handleNameChange = e => {
        return nameRef.current.value
    }

    const  handleLinkChange = e => {
        return linkRef.current.value
    }

    useEffect(() => {
        nameRef.current.value = ''
        linkRef.current.value = ''
    }, [isOpened]);

    function handleSubmit(e) {
        e.preventDefault();

        onAddCard({
            name: nameRef.current.value,
            link: linkRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name='cards'
            title='Новое место'
            buttonText={status ? 'Создание' : 'Создать'}
            isOpen={isOpened}
            onClose={onClose}
            onSubmit={handleSubmit}
          >
            <input id="title-input" type="text" className="form__input" name="name" placeholder="Название" required
              minLength="2" maxLength="30" ref={nameRef} onChange={handleNameChange} />
            <span id="title-input-error" className="form__error form__error-visible"></span>
            <input id="link-input" type="url" className="form__input" name="link" placeholder="Ссылка на картинку"
              required ref={linkRef} onChange={handleLinkChange} />
            <span id="link-input-error" className="form__error form__error-visible"></span>
          </PopupWithForm>
    );
}

export default AddPlacePopup;