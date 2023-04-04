import React from 'react'

import Button from '../Button'

import styles from './ToastPlayground.module.css'

import ToastShelf from '../ToastShelf/ToastShelf'

import { ToastContext } from '../ToastProvider'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState('notice')
  const { createToast } = React.useContext(ToastContext)

  return (
    <>
      <ToastShelf></ToastShelf>
      <form
        onSubmit={(e) =>
          createToast(message, variant, setMessage, setVariant, e)
        }
        className={styles.wrapper}
      >
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={message}
                className={styles.messageInput}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {/* TODO Other Variant radio buttons here */}
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`
                return (
                  <div key={option}>
                    <input
                      type="radio"
                      name="variant"
                      id={id}
                      value={option}
                      checked={option === variant}
                      onChange={(e) => setVariant(e.target.value)}
                    />
                    <label htmlFor={id}>{option}</label>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ToastPlayground
