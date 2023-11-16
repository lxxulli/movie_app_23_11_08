import { Helmet } from "react-helmet";

export const PageTitle = ({ titleName }) => {
  return (
    <Helmet>
      <title> YUL | {titleName}</title>
    </Helmet>
  );
};
