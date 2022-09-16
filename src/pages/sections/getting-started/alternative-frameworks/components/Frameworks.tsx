import React from 'react';
import { FaAngular, FaReact, FaVuejs } from 'react-icons/fa';
import { alternativeFrameworks } from '../../../../../content/topics/getting_started';

function Frameworks() {
	return (
		<div className="different-frameworks">
			<ul>
				<li>
					<CustomFigure
						icon={<FaAngular />}
						title="Angular"
						details={alternativeFrameworks.angular}
					/>
				</li>

				<li>
					<CustomFigure
						icon={<FaReact />}
						title="React.js"
						details={alternativeFrameworks.react}
					/>
				</li>

				<li>
					<CustomFigure
						icon={<FaVuejs />}
						title="Vue.js"
						details={alternativeFrameworks.vue}
					/>
				</li>
			</ul>
		</div>
	);
}

const CustomFigure: React.FC<{
	icon: React.ReactNode;
	title: string;
	details: string;
}> = ({ icon, title, details }) => {
	return (
		<figure>
			{icon}
			<figcaption>
				<dt>{title}</dt>
				<dd>{details}</dd>
			</figcaption>
		</figure>
	);
};
export default Frameworks;
