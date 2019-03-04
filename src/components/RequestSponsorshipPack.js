import React from "react";
import { navigateTo } from "gatsby-link";
import CTA from './CTA'
import styled from 'react-emotion'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledInput = styled.input`
  display: block;
  ${tw`w-full p-2`};
`

const StyledForm = styled.form`
  display: block;
  ${tw`w-full p-2`};
`


export default class RequestSponsorshipPack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    const {url} = this.props
    return (
      <div>
        <StyledForm
          name="pack"
          method="post"
          action="/pack"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="pack" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          
          <p>
            <label>
              <StyledInput placeholder="Your email" type="email" name="email" onChange={this.handleChange} required />
            </label>
          </p>
          
          <CTA
            color="black"
            text="Download sponsorship pack"
            href={url}
          />
        </StyledForm>
      </div>
    );
  }
}