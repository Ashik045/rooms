import React, { useState } from 'react';
import style from './formcomponent.module.scss';

function SocialLink({ facebookUrl, facebookUrlChng, twitterUrl, twitterUrlChng }) {
    const [focus, setFocus] = useState(false);

    const onBlur = () => {
        setFocus(true);
    };

    return (
        <div className={style.exact_form}>
            <input
                className={style.exact_form_inp}
                type="text"
                placeholder="Facebook Link"
                value={facebookUrl}
                onChange={facebookUrlChng}
                required
            />
            <p
                clasName={style.form_err}
                style={{ color: 'red', marginTop: '-13px', fontSize: '14px', marginBottom: '10px' }}
            >
                Facebook is required.
            </p>
            <input
                className={style.exact_form_inp}
                type="text"
                placeholder="Twitter Link"
                value={twitterUrl}
                onChange={twitterUrlChng}
            />
        </div>
    );
}

export default SocialLink;
