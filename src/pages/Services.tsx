import React from "react";
import Service from "../components/services/Service";
import StorageProtectionPNG from "../assets/services/Storage Protection Illustration.png";
import ThreatProtectionPNG from "../assets/services/Threat Protection Illustration.png";
import VaultSolutionPNG from "../assets/services/Vault Solutin Illustration.png";
import Statement from "../components/Statement";

const Services = () => {
	return (
		<>
			<header>
				<Service color="black" title="Storage Protection" illustration={StorageProtectionPNG}>
					Our storage Protection provides complete Immunity and prevents hackers from stealing your data
				</Service>
			</header>
			<Service color="#002B7A" title="Threat Notification Isn’t the Solution - It’s a starting point" illustration={ThreatProtectionPNG}>
				Take action against threats with our Threat protection tool to fight off virus and malware from corrupting your data.
			</Service>
			<Service color="#204D9C" title="Vault Solution" illustration={VaultSolutionPNG}>
				Meet your personal vault. A place to store your most important and sensitive files. Protected with an extra layer of security. Set up your personal vault.
			</Service>
			<Statement />
		</>
	);
};

export default Services;
