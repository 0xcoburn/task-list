import React from "react";

import InboxScreen, { PureInboxScreen } from "./InboxScreen";

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "something",
};
