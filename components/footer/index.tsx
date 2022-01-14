import styles from './footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.container}>
      <div className="wrapper">
          <h2 className={styles.footerHeading}>Vanilla DOM</h2>
          <div className={styles.footerColWrapper}>
              <div className={`${styles.footerCol} ${styles.footerCol1}`}>
                  <ul className={styles.contactList}>
                      <li><a href="mailto:kartamyshev.k@gmail.com">kartamyshev.k@gmail.com</a></li>
                  </ul>
              </div>
              <div className={`${styles.footerCol} ${styles.footerCol2}`}>
                  <ul className={styles.socialMediaList}>
                      <li>
                          <a href="https://github.com/kartamyshev">
                              <span className="icon icon--github">
                                  <svg viewBox="0 0 16 16">
                                      <path
                                              d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,
                                            0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,
                                            0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,
                                            0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,
                                            0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,
                                            10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,
                                            3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,
                                            0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,
                                            1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,
                                            2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,
                                            1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,
                                            5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"></path>
                                  </svg>
                              </span>
                              <span className="username">kartamyshev</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://bitbucket.org/kartamyshev">
                              <span className="icon icon--bitbucket">
                                  <svg viewBox="0 0 32 32">
                                      <path d="M29.208,3.519c-0.203-0.285-0.451-0.525-0.729-0.738c-0.61-0.475-1.297-0.814-2.01-1.102
                                      c-1.516-0.611-3.097-0.971-4.701-1.229C19.81,0.137,17.836,0.012,15.762,0c-1.854,0.016-3.797,0.133-5.725,0.434
                                      C8.668,0.649,7.316,0.94,6.002,1.385c-0.869,0.297-1.71,0.649-2.477,1.164C3.16,2.793,2.824,3.07,2.549,3.418
                                      C2.205,3.856,2.058,4.344,2.147,4.897C2.32,5.989,2.48,7.082,2.66,8.169c0.264,1.611,0.537,3.222,0.811,4.828
                                      c0.306,1.787,0.62,3.573,0.918,5.36c0.07,0.416,0.246,0.769,0.526,1.07c0.179,0.193,0.37,0.377,0.574,0.543
                                      c0.73,0.59,1.562,1.01,2.432,1.354c2.082,0.83,4.259,1.205,6.485,1.328c1.616,0.09,3.23,0.033,4.838-0.187
                                      c1.369-0.185,2.709-0.479,4.011-0.948c0.965-0.349,1.891-0.775,2.725-1.382c0.355-0.26,0.683-0.547,0.945-0.901
                                      c0.181-0.238,0.305-0.504,0.354-0.805c0.397-2.341,0.809-4.679,1.196-7.021c0.362-2.172,0.701-4.346,1.058-6.518
                                      C29.617,4.388,29.502,3.935,29.208,3.519z M15.82,19.64c-2.4-0.008-4.341-1.971-4.333-4.383c0.006-2.41,1.958-4.347,4.369-4.338
                                      c2.425,0.008,4.359,1.961,4.35,4.387C20.195,17.704,18.227,19.648,15.82,19.64z M24.522,4.394
                                      c-0.124,0.139-0.274,0.262-0.436,0.357c-0.45,0.268-0.951,0.409-1.454,0.541c-0.952,0.243-1.923,0.383-2.896,0.485
                                      c-1.281,0.136-2.565,0.183-3.791,0.188c-1.49-0.008-2.914-0.068-4.332-0.238c-1.064-0.129-2.124-0.291-3.146-0.633
                                      C8.164,4.99,7.869,4.858,7.584,4.713C7.438,4.641,7.309,4.528,7.198,4.409c-0.197-0.215-0.196-0.45,0.005-0.663
                                      C7.32,3.621,7.463,3.514,7.61,3.43C8.034,3.184,8.5,3.041,8.969,2.918c0.983-0.256,1.985-0.402,2.994-0.509
                                      c1.652-0.17,3.308-0.221,4.967-0.172c1.524,0.045,3.045,0.158,4.55,0.431c0.706,0.127,1.407,0.274,2.075,0.545
                                      c0.236,0.096,0.463,0.217,0.683,0.346c0.109,0.064,0.208,0.164,0.288,0.266C24.668,4.007,24.674,4.222,24.522,4.394z
                                      M26.186,22.761c0.009,0.088-0.004,0.183-0.021,0.271c-0.305,1.604-0.614,3.205-0.911,4.811c-0.101,0.539-0.344,0.99-0.724,1.377
                                      c-0.422,0.432-0.918,0.752-1.448,1.023c-0.979,0.498-2.018,0.811-3.085,1.031c-1.377,0.286-2.771,0.414-3.563,0.407
                                      c-2.41-0.006-4.184-0.198-5.917-0.698c-0.802-0.23-1.577-0.529-2.3-0.953c-0.379-0.222-0.732-0.478-1.042-0.789
                                      c-0.388-0.392-0.64-0.846-0.741-1.396c-0.296-1.604-0.609-3.207-0.915-4.81c-0.016-0.081-0.021-0.163-0.019-0.245
                                      c0.019-0.394,0.37-0.597,0.724-0.423c0.036,0.021,0.072,0.041,0.105,0.063c1.174,0.853,2.484,1.423,3.858,1.856
                                      c1.262,0.4,2.556,0.641,3.873,0.758c1.52,0.138,3.031,0.104,4.54-0.11c2-0.28,3.91-0.851,5.687-1.827
                                      c0.354-0.194,0.686-0.43,1.025-0.646c0.056-0.035,0.108-0.076,0.167-0.104C25.819,22.206,26.153,22.395,26.186,22.761z
                                      M18.027,15.284c-0.005,1.203-0.992,2.184-2.197,2.178c-1.205-0.004-2.178-0.987-2.172-2.196c0.004-1.212,0.98-2.181,2.192-2.175
                                      C17.059,13.097,18.03,14.073,18.027,15.284z"></path>
                                  </svg>
                              </span>
                              <span className="username">kartamyshev</span>
                          </a>
                      </li>
                  </ul>
              </div>
              <div className={`${styles.footerCol} ${styles.footerCol3}`}>
                  <p className={styles.text}>
                      <a href="https://www.youtube.com/watch?v=0HlE_oRdROo">
                          Lovely music from footer
                      </a>
                  </p>
              </div>
          </div>

      </div>
    </footer>
	)
}
