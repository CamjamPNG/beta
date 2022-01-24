const { React } = require("powercord/webpack");
const { SwitchItem, RadioGroup } = require("powercord/components/settings");

module.exports = React.memo(({ getSetting, updateSetting }) => (
      Normalized Capitalization
    </SwitchItem>
    <SwitchItem
      note="You can interact with your dictionary using chat commands."
      value={getSetting("dictionary")}
      onChange={() => {
        updateSetting("dictionary", !getSetting("dictionary"));
      }}
    >
  </>
));