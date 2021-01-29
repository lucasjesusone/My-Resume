import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div className='card'>
				<div className='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table className='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Analysis and System Development</td>
								<td>Jan 2020 - Present</td>
								
							</tr>
							<tr>
								<td>English</td>
								<td>Jan 2018 - Present</td>
								
							</tr>
							<tr>
								<td>React JS - React Native</td>
								<td>Dec 2020 - Present</td>
								
							</tr>
							<tr>
								<td>JavaScript</td>
								<td>Apr 2020</td>
								
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
