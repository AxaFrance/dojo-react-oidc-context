import Component from "./Projects.component";
import { lifecycle, withState, compose, withHandlers } from "recompose";

const getProjectsUrl = "/api/project";

const projectsState = withState("projects", "setprojects", []);

const lifecycleHoc = lifecycle({
  async componentDidMount() {
    try {
      const collection = await this.props.getProjects();
      this.props.setprojects(collection);
    } catch (error) {
      console.error(error);
    }
  }
});

const withFetch = withHandlers({
  getProjects: () => async () => {
    const response = await fetch(getProjectsUrl);
    if (response.status !== 200) {
      throw response.statusText;
    }
    return response.json();
  }
});

export default compose(
  projectsState,
  withFetch,
  lifecycleHoc
)(Component);
