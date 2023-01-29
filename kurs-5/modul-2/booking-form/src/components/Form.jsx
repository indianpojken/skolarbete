import { useState } from 'react';

import './Form.css';

import Arrow from '../assets/arrow.svg'

function Form() {
    const [formData, setFormData] = useState({
        class: 2,
        tickets: 1,
        title: "Ms.",
        firstname: "",
        lastname: "",
    });

    const [acceptTerms, setAcceptTerms] = useState(false);

    const submit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <article className="form">
            <header>
                <h2 className="form__title">Åka tåg</h2>

                <section className="form__stations">
                    <article className="station station--from">
                        <section>
                            <h3 className="station__name">Stockholm</h3>
                            <p className="station__time">10.30</p>
                        </section>
                    </article>

                    <article className="station station--to">
                        <section>
                            <h3 className="station__name">Göteborg</h3>
                            <p className="station__time">14.45</p>
                        </section>
                    </article>

                    <img className="station__arrow" src={Arrow} alt="Right pointing arrow" />
                </section>
            </header>

            <section className="form__inputs">
                <form onSubmit={submit}>
                    <fieldset
                        onChange={(e) => setFormData({ ...formData, class: parseInt(e.target.value, 10) })}
                        value={formData.class}
                    >
                        <label for="class2">
                            <input type="radio" name="class" value="2" defaultChecked />
                            2:a klass
                        </label>

                        <label for="class1">
                            <input type="radio" name="class" value="1" />
                            1:a klass
                        </label>
                    </fieldset>

                    <section className="form__columns">
                        <label for="tickets">
                            Antal biljetter
                            <select
                                value={formData.tickets}
                                name="tickets"
                                onChange={(e) => setFormData({ ...formData, tickets: parseInt(e.target.value, 10) })}
                            >
                                {[...Array(5)].map((_, i) =>
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                )}
                            </select>
                        </label>

                        <label for="tickets">
                            Titel
                            <select
                                value={formData.title}
                                name="title"
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            >
                                <option value="Ms.">Ms.</option>
                                <option value="Mr.">Mr.</option>
                            </select>
                        </label>
                    </section>

                    <label for="firstname">
                        Förnamn
                        <input
                            value={formData.firstname}
                            onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                            type="text"
                            name="firstname"
                        />
                    </label>

                    <label for="lastname">
                        Efternamn
                        <input
                            value={formData.lastname}
                            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                            type="text"
                            name="lastname"
                        />
                    </label>

                    <label className="form__accept-terms" for="accept-terms">
                        <input
                            value={acceptTerms}
                            onChange={() => setAcceptTerms(!acceptTerms)}
                            type="checkbox"
                            id="accept-terms"
                            name="accept-terms"
                        />
                        Godkänner villkoren
                    </label>

                    <button type="submit" disabled={!acceptTerms}>
                        Boka Biljetter
                    </button>
                </form>
            </section >
        </article >
    );
}

export default Form;
