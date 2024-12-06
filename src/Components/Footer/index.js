import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="appFooter">
      <Typography.Link href="https://www.google.com" target="'_blank">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target="'_blank">
        Terms & Conditions
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target="'_blank">
        Return Policy
      </Typography.Link>
      <Typography.Link href="tel: +234012345678" target="'_blank">
        +234012345678
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
