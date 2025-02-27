import React from "react";

// Import all SVG files statically using a single import statement
import { ReactComponent as PythonLogo } from "../static/python.svg";
import { ReactComponent as JavaLogo } from "../static/java.svg";
import { ReactComponent as GoLogo } from "../static/go.svg";
import { ReactComponent as SeleniumLogo } from "../static/Selenium.svg";
import { ReactComponent as CucumberLogo } from "../static/cucumber.svg";
import { ReactComponent as KubernetesLogo } from "../static/kubernetes.svg";
import { ReactComponent as MySQLLogo } from "../static/mysql.svg";
import { ReactComponent as JenkinsLogo } from "../static/jenkins.svg";
import { ReactComponent as MavenLogo } from "../static/maven.svg";
import { ReactComponent as PostgreSQLLogo } from "../static/postgresql.svg";
import { ReactComponent as SpringLogo } from "../static/spring.svg";
import { ReactComponent as TerraformLogo } from "../static/terraform.svg";
import { ReactComponent as PytestLogo } from "../static/pytest.svg";
import { ReactComponent as MSSQLLogo } from "../static/mssql.svg";
import { ReactComponent as JUnitLogo } from "../static/JUnit.svg";
import { ReactComponent as IntelliJLogo } from "../static/intellij.svg";
import { ReactComponent as GrafanaLogo } from "../static/grafana.svg";
import { ReactComponent as GithubLogo } from "../static/github.svg";
import { ReactComponent as GCPLogo } from "../static/gcp.svg";
import { ReactComponent as AWSLogo } from "../static/aws.svg";
import { ReactComponent as AzureLogo } from "../static/azure.svg";
import { ReactComponent as DjangoLogo } from "../static/Django.svg";
import { ReactComponent as JiraLogo } from "../static/Jira.svg";
import { ReactComponent as AnsibleLogo } from "../static/Ansible.svg";
import { ReactComponent as PlaywrightLogo } from "../static/playwright.svg";
import { ReactComponent as MongoDBLogo } from "../static/MongoDB.svg";
import { ReactComponent as JavaScriptLogo } from "../static/JavaScript.svg";
import { ReactComponent as ReactJSLogo } from "../static/React.svg";
import { ReactComponent as PostmanLogo } from "../static/Postman.svg";
import { ReactComponent as JMeterLogo } from "../static/JMeter.svg";
import { ReactComponent as DockerLogo } from "../static/Docker.svg";
import { ReactComponent as GitLogo } from "../static/git.svg";
import { ReactComponent as VSCodeLogo } from "../static/vscode.svg";
import { ReactComponent as CPPLogo } from "../static/C++.svg";
const skillLogos = {
  Python: PythonLogo,
  Java: JavaLogo,
  Go: GoLogo,
  Selenium: SeleniumLogo,
  Cucumber: CucumberLogo,
  Kubernetes: KubernetesLogo,
  MySQL: MySQLLogo,
  Jenkins: JenkinsLogo,
  Maven: MavenLogo,
  PostgreSQL: PostgreSQLLogo,
  Spring: SpringLogo,
  Terraform: TerraformLogo,
  Pytest: PytestLogo,
  MSSQL: MSSQLLogo,
  JUnit: JUnitLogo,
  IntelliJ: IntelliJLogo,
  Grafana: GrafanaLogo,
  Github: GithubLogo,
  GCP: GCPLogo,
  AWS: AWSLogo,
  Azure: AzureLogo,
  Django: DjangoLogo,
  Jira: JiraLogo,
  Ansible: AnsibleLogo,
  Playwright: PlaywrightLogo,
  MongoDB: MongoDBLogo,
  JavaScript: JavaScriptLogo, // Added JavaScript
  ReactJS: ReactJSLogo, // Added ReactJS
  Postman: PostmanLogo,
  JMeter: JMeterLogo,
  Docker: DockerLogo,
  GitHub: GithubLogo,
  Git: GitLogo,
  "Visual Studio": VSCodeLogo,
  "C++": CPPLogo,
};

function SkillIcon({ skill }) {
  const Icon = skillLogos[skill];

  return (
    <div className="logo-wrapper d-flex justify-content-center align-items-center m-1 mr-md-2 ml-md-2">
      {Icon ? (
        <Icon
          aria-label={skill}
          role="img"
          title={skill}
          className="ratio ratio-1x1"
        />
      ) : (
        <span>{skill}</span>
      )}
    </div>
  );
}
export default SkillIcon;
