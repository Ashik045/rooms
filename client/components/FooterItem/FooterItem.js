import Link from 'next/link'
import React from 'react'
import style from './footerIte.module.scss'

const FooterItem = ({footerDetail, footerHeader}) => {
  return (
    <div className={style.footer_item}>
                <h2>{footerHeader}</h2>
                {footerDetail.map((detail) => {
                    return (
                            <Link href={detail.to}>
                                <p>{detail.link}</p>
                            </Link>
                    )
                })}
    </div>
  )
}

export default FooterItem