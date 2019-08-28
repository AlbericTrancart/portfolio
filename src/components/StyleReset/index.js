import { createGlobalStyle } from "styled-components";

const StyleReset = createGlobalStyle`
  html {
  color: #3a4145;
  font-family: 'Noto Serif', serif;
  font-size: 21px;
  height: 100%;
}
body {
  min-height: 100%;
  letter-spacing: -0.003rem;
  line-height: 1.6em;
}
html,
body,
p,
h1,
h2,
h3,
h4,
h5,
h6,
figure,
figcaption,
blockquote {
  margin: 0;
  padding: 0;
}
ul {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
time {
  font-family: 'Noto Sans', sans-serif;
}
h1 {
  line-height: 1.2em;
  font-size: 2rem;
}
h2 {
  line-height: 1.2em;
  font-size: 1.6rem;
}
h3 {
  line-height: 1.2em;
  font-size: 1.2rem;
}
* {
  box-sizing: border-box;
}
.full-height {
  height: 100%;
}
.full-width {
  width: 100%;
}
.padded {
  padding: 0.5rem;
}
@media (min-width: 768px) {
  .padded {
    padding: 1rem;
  }
}
.nomargin {
  margin: 0 !important;
}
.hidden {
  display: none;
}
.mtop {
  margin-top: 1rem;
}
.mtop-big {
  margin-top: 2rem;
}
.fx-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
}
@media only screen and (min-width: 768px) {
  .fx-container {
    width: 768px;
  }
}
@media only screen and (min-width: 992px) {
  .fx-container {
    width: 992px;
  }
}
@media only screen and (min-width: 1400px) {
  .fx-container {
    max-width: 900px;
    width: 1400px;
  }
}
.fx-row {
  display: flex;
  position: relative;
  flex-direction: row;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  margin-bottom: -$spacing-factor;
}
.fx-row.fx-reverse {
  flex-direction: row-reverse;
}
.fx-col {
  display: flex;
  position: relative;
  flex-direction: column;
}
.fx-col.fx-reverse {
  flex-direction: column-reverse;
}
.fx-wrap {
  flex-wrap: wrap;
}
.fx-wrap-reverse {
  flex-wrap: wrap-reverse;
}
.fx-grow {
  flex-grow: 1;
}
.fx-col-xs {
  width: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-1 {
  width: 8.333333333333334%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-1 {
  margin-left: 8.333333333333334%;
}
.fx-col-xs-2 {
  width: 16.666666666666668%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-2 {
  margin-left: 16.666666666666668%;
}
.fx-col-xs-3 {
  width: 25%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-3 {
  margin-left: 25%;
}
.fx-col-xs-4 {
  width: 33.333333333333336%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-4 {
  margin-left: 33.333333333333336%;
}
.fx-col-xs-5 {
  width: 41.666666666666664%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-5 {
  margin-left: 41.666666666666664%;
}
.fx-col-xs-6 {
  width: 50%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-6 {
  margin-left: 50%;
}
.fx-col-xs-7 {
  width: 58.333333333333336%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-7 {
  margin-left: 58.333333333333336%;
}
.fx-col-xs-8 {
  width: 66.66666666666667%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-8 {
  margin-left: 66.66666666666667%;
}
.fx-col-xs-9 {
  width: 75%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-9 {
  margin-left: 75%;
}
.fx-col-xs-10 {
  width: 83.33333333333333%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-10 {
  margin-left: 83.33333333333333%;
}
.fx-col-xs-11 {
  width: 91.66666666666667%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-11 {
  margin-left: 91.66666666666667%;
}
.fx-col-xs-12 {
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
}
.fx-col-xs-offset-12 {
  margin-left: 100%;
}
.fx-start-xs {
  justify-content: flex-start;
}
.fx-center-xs {
  justify-content: center;
}
.fx-end-xs {
  justify-content: flex-end;
}
.fx-around-xs {
  justify-content: space-around;
}
.fx-between-xs {
  justify-content: space-between;
}
.fx-top-xs {
  align-items: flex-start;
}
.fx-middle-xs {
  align-items: center;
}
.fx-bottom-xs {
  align-items: flex-end;
}
@media (min-width: 768px) {
  .fx-col-sm {
    width: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-1 {
    width: 8.333333333333334%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-1 {
    margin-left: 8.333333333333334%;
  }
  .fx-col-sm-2 {
    width: 16.666666666666668%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-2 {
    margin-left: 16.666666666666668%;
  }
  .fx-col-sm-3 {
    width: 25%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-3 {
    margin-left: 25%;
  }
  .fx-col-sm-4 {
    width: 33.333333333333336%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-4 {
    margin-left: 33.333333333333336%;
  }
  .fx-col-sm-5 {
    width: 41.666666666666664%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-5 {
    margin-left: 41.666666666666664%;
  }
  .fx-col-sm-6 {
    width: 50%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-6 {
    margin-left: 50%;
  }
  .fx-col-sm-7 {
    width: 58.333333333333336%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-7 {
    margin-left: 58.333333333333336%;
  }
  .fx-col-sm-8 {
    width: 66.66666666666667%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-8 {
    margin-left: 66.66666666666667%;
  }
  .fx-col-sm-9 {
    width: 75%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-9 {
    margin-left: 75%;
  }
  .fx-col-sm-10 {
    width: 83.33333333333333%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-10 {
    margin-left: 83.33333333333333%;
  }
  .fx-col-sm-11 {
    width: 91.66666666666667%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-11 {
    margin-left: 91.66666666666667%;
  }
  .fx-col-sm-12 {
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-sm-offset-12 {
    margin-left: 100%;
  }
  .fx-start-sm {
    justify-content: flex-start;
  }
  .fx-center-sm {
    justify-content: center;
  }
  .fx-end-sm {
    justify-content: flex-end;
  }
  .fx-around-sm {
    justify-content: space-around;
  }
  .fx-between-sm {
    justify-content: space-between;
  }
  .fx-top-sm {
    align-items: flex-start;
  }
  .fx-middle-sm {
    align-items: center;
  }
  .fx-bottom-sm {
    align-items: flex-end;
  }
}
@media (min-width: 992px) {
  .fx-col-md {
    width: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-1 {
    width: 8.333333333333334%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-1 {
    margin-left: 8.333333333333334%;
  }
  .fx-col-md-2 {
    width: 16.666666666666668%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-2 {
    margin-left: 16.666666666666668%;
  }
  .fx-col-md-3 {
    width: 25%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-3 {
    margin-left: 25%;
  }
  .fx-col-md-4 {
    width: 33.333333333333336%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-4 {
    margin-left: 33.333333333333336%;
  }
  .fx-col-md-5 {
    width: 41.666666666666664%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-5 {
    margin-left: 41.666666666666664%;
  }
  .fx-col-md-6 {
    width: 50%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-6 {
    margin-left: 50%;
  }
  .fx-col-md-7 {
    width: 58.333333333333336%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-7 {
    margin-left: 58.333333333333336%;
  }
  .fx-col-md-8 {
    width: 66.66666666666667%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-8 {
    margin-left: 66.66666666666667%;
  }
  .fx-col-md-9 {
    width: 75%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-9 {
    margin-left: 75%;
  }
  .fx-col-md-10 {
    width: 83.33333333333333%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-10 {
    margin-left: 83.33333333333333%;
  }
  .fx-col-md-11 {
    width: 91.66666666666667%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-11 {
    margin-left: 91.66666666666667%;
  }
  .fx-col-md-12 {
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-md-offset-12 {
    margin-left: 100%;
  }
  .fx-start-md {
    justify-content: flex-start;
  }
  .fx-center-md {
    justify-content: center;
  }
  .fx-end-md {
    justify-content: flex-end;
  }
  .fx-around-md {
    justify-content: space-around;
  }
  .fx-between-md {
    justify-content: space-between;
  }
  .fx-top-md {
    align-items: flex-start;
  }
  .fx-middle-md {
    align-items: center;
  }
  .fx-bottom-md {
    align-items: flex-end;
  }
}
@media (min-width: 1400px) {
  .fx-col-lg {
    width: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-1 {
    width: 8.333333333333334%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-1 {
    margin-left: 8.333333333333334%;
  }
  .fx-col-lg-2 {
    width: 16.666666666666668%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-2 {
    margin-left: 16.666666666666668%;
  }
  .fx-col-lg-3 {
    width: 25%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-3 {
    margin-left: 25%;
  }
  .fx-col-lg-4 {
    width: 33.333333333333336%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-4 {
    margin-left: 33.333333333333336%;
  }
  .fx-col-lg-5 {
    width: 41.666666666666664%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-5 {
    margin-left: 41.666666666666664%;
  }
  .fx-col-lg-6 {
    width: 50%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-6 {
    margin-left: 50%;
  }
  .fx-col-lg-7 {
    width: 58.333333333333336%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-7 {
    margin-left: 58.333333333333336%;
  }
  .fx-col-lg-8 {
    width: 66.66666666666667%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-8 {
    margin-left: 66.66666666666667%;
  }
  .fx-col-lg-9 {
    width: 75%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-9 {
    margin-left: 75%;
  }
  .fx-col-lg-10 {
    width: 83.33333333333333%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-10 {
    margin-left: 83.33333333333333%;
  }
  .fx-col-lg-11 {
    width: 91.66666666666667%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-11 {
    margin-left: 91.66666666666667%;
  }
  .fx-col-lg-12 {
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
  }
  .fx-col-lg-offset-12 {
    margin-left: 100%;
  }
  .fx-start-lg {
    justify-content: flex-start;
  }
  .fx-center-lg {
    justify-content: center;
  }
  .fx-end-lg {
    justify-content: flex-end;
  }
  .fx-around-lg {
    justify-content: space-around;
  }
  .fx-between-lg {
    justify-content: space-between;
  }
  .fx-top-lg {
    align-items: flex-start;
  }
  .fx-middle-lg {
    align-items: center;
  }
  .fx-bottom-lg {
    align-items: flex-end;
  }
}
@media (max-width: 767px) {
  .fx-hide-xs {
    display: none !important;
  }
}
@media (max-width: 991px) and (min-width: 768px) {
  .fx-hide-sm {
    display: none !important;
  }
}
@media (max-width: 1399px) and (min-width: 992px) {
  .fx-hide-md {
    display: none !important;
  }
}
@media (min-width: 1400px) {
  .fx-hide-lg {
    display: none !important;
  }
}
.small {
  font-size: 0.75rem;
}
.big {
  font-size: 1.5rem;
}
.bigger {
  font-size: 2rem;
}
.large {
  font-size: 3rem;
}
.huge {
  font-size: 5rem;
}
.text-center {
  text-align: center;
}
.text-uppercase {
  text-transform: uppercase;
}
.Video {
  position: relative;
  padding-top: 56.25%;
  width: 100%;
}
.Video > div {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.ProjectPreview {
  padding-top: 56.25%;
  position: relative;
}
.ProjectPreview__image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(1px);
  left: 0;
  position: absolute;
  top: 0;
}
.ProjectPreview__image:after {
  background-color: #000;
  content: '';
  height: 100%;
  left: 0;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 100%;
}
.ProjectPreview__title.Link {
  color: #fff;
  height: 100%;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100%;
}
.Footer {
  color: #78858d;
  font-size: 0.75rem;
  text-decoration: italic;
  margin-bottom: 1rem;
}
.Footer__link.Link {
  color: #78858d;
}
.Header {
  background-color: #3a4145;
  color: #fff;
  text-align: center;
}
@media (min-width: 768px) {
  .Header {
    text-align: left;
  }
}
.Header__image {
  border-radius: 50%;
  width: 100%;
}
.Header__link.Link {
  color: #fff;
}
.Header__icons {
  margin-top: 0.5rem;
  font-size: 1.25rem;
}
.Header__icons a {
  margin-right: 0.5rem;
}
.PostPreview__date {
  color: #78858d;
}
.Content {
  text-align: center;
}
.Content h1,
.Content h2,
.Content h3,
.Content p,
.Content img,
.Content blockquote,
.Content ul,
.Content ol {
  text-align: left;
}
.Content h1,
.Content h2,
.Content h3,
.Content p,
.Content ul,
.Content img,
.Content blockquote,
.Content .Divider,
.Content .Video {
  margin-top: 1rem;
}
@media (min-width: 768px) {
  .Content h1,
  .Content h2,
  .Content h3,
  .Content p,
  .Content ul,
  .Content img,
  .Content blockquote,
  .Content .Divider,
  .Content .Video {
    margin-top: 2rem;
  }
}
.Content img {
  max-width: 100%;
}
.Content figure {
  text-align: center;
  width: 100%;
}
.Content figcaption {
  font-style: italic;
  margin-top: 0.5rem;
  text-align: center;
}
.Content blockquote {
  font-style: italic;
  border-left: #3a4145 0.4em solid;
  padding-left: 1.6rem;
  margin-left: -1.6rem;
}
.Divider {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  border: none;
}
.Divider:before,
.Divider:after {
  content: "";
  flex-grow: 1;
  background: #eaecee;
  height: 1px;
  font-size: 0;
  line-height: 0;
}
.Link {
  color: #3a4145;
  cursor: pointer;
  transition: color ease 0.3s;
}
.Link:hover,
.Link:focus {
  color: #57a3e8;
}
.Link--no-underline {
  text-decoration: none;
}

`;

export default StyleReset;
