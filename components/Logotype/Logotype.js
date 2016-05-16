import React, {PropTypes} from 'react';
import modernizr from './modernizr-inlinesvg';

// noinspection JSUnresolvedVariable
import styles from './Logotype.less';

/* eslint-disable max-len */
const createCloudSVG = color => (
  <svg width="25px" height="19px" viewBox="9 0 25 19" className={styles.cloud}>
    <path
      fill={color}
      d="M21.1744364,0.854871967 C17.8731636,0.854871967 15.0510424,2.9310477 13.9323455,5.85111464 C11.4838,6.7743113 9.73773939,9.14737406 9.73773939,11.9149305 C9.73773939,15.4958762 12.6410727,18.3976418 16.2103455,18.3976418 L26.8491333,18.3976418 C30.8488303,18.3976418 34.1054364,15.1440854 34.1054364,11.1401774 C34.1054364,7.29081339 31.1005879,4.13689707 27.3221939,3.88677992 C25.8908303,2.00785105 23.6554667,0.854871967 21.1744364,0.854871967 M21.1744364,2.60772552 C23.0646485,2.60772552 24.7985273,3.4617841 25.9314364,4.95028619 L26.4166788,5.58066276 L27.2064667,5.6376 C30.0955879,5.81857908 32.3573455,8.23637824 32.3573455,11.1401774 C32.3573455,14.1761523 29.888497,16.6549556 26.8491333,16.6549556 L16.2103455,16.6549556 C13.607497,16.6549556 11.4858303,14.5279431 11.4858303,11.9149305 C11.4858303,9.95872971 12.7202545,8.18350795 14.5475273,7.48806025 L15.2845273,7.20947448 L15.5687697,6.46929038 C16.4519515,4.15926527 18.7035576,2.60772552 21.1744364,2.60772552"
      id="Fill-8"
    />
  </svg>
);
/* eslint-enable max-len */

const createCloudVML = (color) => {
  document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
  const cloud = `
    <v:shape
      style="position: absolute;left: 0;bottom: -1px; width: 0.66px;height: 0.66px;z-index: 1;"
      coordsize="21600,21600" filled="t" fillcolor=${color} stroked="f"
      strokecolor="black" strokeweight="1pt"
      path=" m9510480,12696480 c9570960,12696480,9627120,12724560,9663840,12772080,9663840,12772080,9678960,12793680,9678960,12793680,9678960,12793680,9704880,12793680,9704880,12793680,9797760,12800160,9869040,12875760,9869040,12968640,9869040,13065840,9791280,13143600,9691920,13143600,9691920,13143600,9350640,13143600,9350640,13143600,9268560,13143600,9201600,13076640 9201600,12992400,9201600,12927600,9240480,12873600,9300960,12849840,9300960,12849840,9326880,12843360,9326880,12843360,9326880,12843360,9337680,12817440,9337680,12817440,9361440,12748320,9432720,12696480,9510480,12696480 m9510480,12640320 c9404640,12640320,9316080,12707280,9279360,12802320,9201600,12830400,9145440,12910320,9145440,12994560,9145440,13109040,9238320,13201920,9350640,13201920,9350640,13201920,9691920,13201920,9691920,13201920,9819360,13201920,9923040,13098240,9923040,12968640,9923040,12843360,9828000,12744000,9707040,12735360,9663840,12679200,9592560,12640320 9510480,12640320,9510480,12640320,9510480,12640320,9510480,12640320,9510480,12640320,9510480,12640320,9510480,12640320 e"
    >
      <v:stroke opacity=".75" miterlimit="8" />
      <v:skew on="t" matrix="1,0,0,1,0,0" offset="-424,-586" />
      <v:fill type="solid" />
    </v:shape>
  `;
  return (
    <span
      style={{position: 'relative', width: 23, display: 'inline-block'}}
      dangerouslySetInnerHTML={{__html: cloud}}
    />
  );
};

// noinspection JSUnresolvedVariable
const createCloud = modernizr.inlinesvg ? createCloudSVG : createCloudVML;

const Logotype = ({color = '#D92932', suffix}) => (
  <a href="/" tabIndex="-1" className={styles.root}>
    <span>к</span>
    <span style={{color}}>{createCloud(color)}</span>
    <span>нтур.</span>
    <span style={{color}}>{suffix}</span>
  </a>
);

Logotype.propTypes = {
  /**
   * Цвет логотипа в rgb, rgba, hex
   */
  color: PropTypes.string,

  /**
   * Суффикс сервиса
   */
  suffix: PropTypes.string.isRequired,
};

module.exports = Logotype;
