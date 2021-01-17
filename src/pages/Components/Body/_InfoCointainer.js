import useBaseUrl from "@docusaurus/useBaseUrl"
import React from "react"

function InfoContainer() {
  return (
    <div className="hero shadow--md" style={{ marginTop: "10px" }}>
      <div className="container">
        <h1 className="hero__title">SpaceAPI</h1>
        <p className="hero__subtitle">
          <b>SpaceAPI </b>is an API to retrieve Information Regarding the <b>Planets</b>.  A complete list of all crewed spaceflights, with details on each mission’s accomplishments and crew, is available in the section of the titular &quot;SpaceAPI&quot;.
          <br />
          The data and images are used without claim of ownership and belong to
          their respective owners. This API is open source and uses a{" "}
          <a href="https://github.com/suryateja011/SpaceAPI/blob/main/LICENSE">
            BSD license
          </a>
          .
        </p>

        <div>
          <a
            className="button button--success button--outline button--lg"
            href={useBaseUrl("docs/")}
          >
            Examples
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoContainer