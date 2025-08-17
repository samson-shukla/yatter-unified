export const interactiveMessageFormulator = (
  bodyText,
  actionButtonText,
  actionSections,
  headerText = "",
  footerText = ""
) => {
  try {
    let finalMessage = {
      type: "list",
      body: {
        text: bodyText,
      },
      action: {
        button: actionButtonText,
        sections: actionSections,
      },
    };

    // console.log("interactiveMessageFormulator finalMessage", finalMessage);

    if (headerText !== "") {
      finalMessage.header = {
        text: headerText,
      };
    }
    if (footerText !== "") {
      finalMessage.footer = {
        text: footerText,
      };
    }

    return finalMessage;
  } catch (error) {
    console.log("interactiveMessageFormulator | error", error);
    // returning null right now.
    // TBI . Change it to error message
    return;
  }
};
