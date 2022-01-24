const { React } = require('powercord/webpack');
const { SliderInput } = require('powercord/components/settings');

module.exports = class LilSettings extends React.PureComponent {
	render() {
		const { getSetting, updateSetting } = this.props;
		return (
				Volume
			</SliderInput>
		);
	}
};
