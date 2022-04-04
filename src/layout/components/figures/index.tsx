import React from 'react';
import { FaAngular, FaReact, FaVuejs } from 'react-icons/fa';

function FigureGroup() {
	const frameworks = {
		angular: `complete component-based UI framework, packed with
		features. Uses Typescript. Can be overkil for smaller
		projects`,
		react: `lean and focused component-based UI library. Certain
		features (e.g. routing) are added via community packages`,
		vue: `complete component-based UI framework, includes most core
		features. A bit less popular than React, Angular`,
	};

	return (
		<div className="different-frameworks">
			<ul>
				<li>
					<CustomFigure
						icon={<FaAngular />}
						title="Angular"
						details={frameworks.angular}
					/>
				</li>

				<li>
					<CustomFigure
						icon={<FaReact />}
						title="React.js"
						details={frameworks.react}
					/>
				</li>

				<li>
					<CustomFigure
						icon={<FaVuejs />}
						title="Vue.js"
						details={frameworks.vue}
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
export default FigureGroup;
