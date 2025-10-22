<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { currency } from '$lib/stores/currency';
	import { convertTemp } from '$lib/utils/unitConversions';
	import { convertPrice, convertPriceRange } from '$lib/utils/currencyConversions';
	
	const title = 'Equipment & Lab Setup<br>Home Tissue Culture Guide';
	const badges = [
		'Investment: $300-$800',
		'Setup Time: 1-2 Days',
		'Space: Any Room'
	];
	const introColumns = [
		'Starting your plant tissue culture journey doesn\'t require expensive laboratory equipment. With the right affordable alternatives and proper techniques, you can create a highly effective home setup that produces professional-quality results.',
		'This guide provides detailed equipment alternatives, setup instructions, and cost comparisons. You\'ll learn how to build a functional tissue culture lab for under $800—a 95% cost reduction compared to professional setups while maintaining effectiveness.',
		'The key to success lies not in expensive equipment, but in understanding proper sterile technique, maintaining consistent environmental conditions, and following proven protocols.'
	];
	const source = '';
</script>

<svelte:head>
	<title>Equipment & Lab Setup Guide - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Step-by-Step Home Lab Setup" columns={2}>
		<div>
			<h3>Step 1: Choose Your Location</h3>
			<ul>
				<li>Select a quiet room with minimal foot traffic</li>
				<li>Ensure stable temperature and good ventilation</li>
				<li>Position away from windows to control lighting</li>
			</ul>
			
			<h3>Step 2: Install Equipment</h3>
			<ol>
				<li>Set up work surface at comfortable height</li>
				<li>Position Still Air Box with easy access</li>
				<li>Install LED grow lights with timer</li>
				<li>Arrange sterilization equipment nearby</li>
			</ol>
			
			<h3>Step 3: Prepare Storage Solutions</h3>
			<ul>
				<li><strong>Chemical Storage:</strong> Cool, dry location away from light</li>
				<li><strong>Glassware Storage:</strong> Clean, dust-free cabinet</li>
				<li><strong>Culture Storage:</strong> Dedicated growing area with controlled environment</li>
			</ul>
		</div>
		<div>
			<h3>Step 4: Safety Measures</h3>
			<ul>
				<li>Install proper ventilation for chemical fumes</li>
				<li>Keep fire extinguisher accessible (for torch use)</li>
				<li>Maintain first aid kit with burn treatment</li>
				<li>Use safety glasses and gloves consistently</li>
			</ul>
			
			<h3>Step 5: Test Your Setup</h3>
			<ol>
				<li>Practice sterile technique in Still Air Box</li>
				<li>Test pressure cooker sterilization cycle</li>
				<li>Verify temperature control in growing area</li>
				<li>Confirm lighting timer functionality</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Equipment Guide & Cost Comparison">
		<div class="equipment-table-wrapper">
			<table class="equipment-table">
				<thead>
					<tr>
						<th>Category</th>
						<th>Professional Option</th>
						<th>Home Alternative (Setup & Usage)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>1. Sterile Work Environment</strong></td>
						<td>
							<strong>Laminar Flow Hood</strong><br>
							{convertPriceRange(3000, 10000, $currency)}<br>
							<span class="detail">• HEPA filtration<br>• Positive pressure barrier</span>
						</td>
						<td class="home-alt">
							<strong>Still Air Box (SAB)</strong><br>
							{convertPriceRange(20, 50, $currency)}<br>
							<span class="detail">
								• Plastic container with armholes<br>
								• Minimal air movement<br>
								<strong>Setup:</strong> Use 50L+ container, cut 8-10" armholes, clean with 70% alcohol before each use
							</span>
						</td>
					</tr>
					<tr>
						<td><strong>2. Sterilization Equipment</strong></td>
						<td>
							<strong>Autoclave</strong><br>
							{convertPriceRange(2000, 15000, $currency)}<br>
							<span class="detail">• High-pressure steam sterilization</span>
						</td>
						<td class="home-alt">
							<strong>Digital Pressure Cooker</strong><br>
							{convertPriceRange(50, 150, $currency)}<br>
							<span class="detail">
								• {convertTemp(121, $unitSystem)} under pressure<br>
								• Sterilizes glassware & media<br>
								<strong>Protocol:</strong> 15 psi minimum, {convertTemp(121, $unitSystem)} for 20+ minutes
							</span>
						</td>
					</tr>
					<tr>
						<td><strong>3. Tool Sterilization</strong></td>
						<td>
							<strong>Dry Heat Sterilizer</strong><br>
							{convertPriceRange(500, 2000, $currency)}
						</td>
						<td class="home-alt">
							<strong>Butane Torch</strong><br>
							{convertPriceRange(15, 30, $currency)}<br>
							<span class="detail">
								• Instant sterilization<br>
								• Heat to red-hot, then cool<br>
								<strong>Usage:</strong> Flame sterilize metal tools between uses
							</span>
						</td>
					</tr>
					<tr>
						<td><strong>4. Media Preparation</strong><br><span class="common-note">(Common to both setups)</span></td>
						<td colspan="2">
							<strong>Essential Items:</strong>
							Digital Scale ({convertPriceRange(30, 80, $currency)}) • 
							Glass Beakers ({convertPriceRange(20, 50, $currency)}) • 
							pH Meter ({convertPriceRange(25, 100, $currency)}) • 
							Magnetic Stirrer ({convertPriceRange(50, 150, $currency)}) • 
							Measuring Cylinders ({convertPriceRange(30, 60, $currency)})
						</td>
					</tr>
					<tr>
						<td><strong>5. Growth Environment</strong><br><span class="common-note">(Common to both setups)</span></td>
						<td colspan="2">
							<strong>Lighting:</strong> LED Grow Lights ({convertPriceRange(50, 200, $currency)}) • 
							Timer ({convertPriceRange(15, 30, $currency)}) • 
							30-50 μmol m⁻²s⁻¹ intensity<br>
							<strong>Temperature:</strong> {convertTemp(22, $unitSystem)}-{convertTemp(25, $unitSystem)} consistently • 
							Digital thermometer ({convertPriceRange(10, 25, $currency)})
						</td>
					</tr>
					<tr class="total-row">
						<td><strong>TOTAL SETUP COST</strong></td>
						<td class="professional-total">
							<strong>Professional Laboratory</strong><br>
							{convertPriceRange(10000, 30000, $currency)}<br>
							<span class="detail">
								• Laminar flow hood: {convertPriceRange(5000, 15000, $currency)}<br>
								• Autoclave: {convertPriceRange(3000, 10000, $currency)}<br>
								• Growth chamber: {convertPriceRange(2000, 5000, $currency)}
							</span>
						</td>
						<td class="home-total">
							<strong>Home Alternative</strong><br>
							{convertPriceRange(300, 800, $currency)}<br>
							<span class="detail">
								• Still Air Box: {convertPriceRange(50, 100, $currency)}<br>
								• Pressure cooker: {convertPriceRange(100, 200, $currency)}<br>
								• LED lights: {convertPriceRange(100, 250, $currency)}<br>
								• Tools & equipment: {convertPriceRange(150, 250, $currency)}
							</span>
							<br><strong class="highlight">Savings: 95-97%</strong>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Safety Considerations" columns={3}>
		<div>
			<h3>Chemical Handling</h3>
			<ul>
				<li>Always wear nitrile gloves when handling bleach solutions</li>
				<li>Use eye protection with chemical-resistant lenses</li>
				<li>Ensure adequate ventilation when preparing media</li>
				<li>Store chemicals according to manufacturer specifications</li>
			</ul>
		</div>
		<div>
			<h3>Equipment Safety</h3>
			<ul>
				<li>Never leave pressure cooker unattended during sterilization</li>
				<li>Allow torch-heated tools to cool completely before handling</li>
				<li>Regularly inspect Still Air Box for cracks or damage</li>
				<li>Keep workspace organized to prevent accidents</li>
			</ul>
		</div>
		<div>
			<h3>Emergency Procedures</h3>
			<ul>
				<li>Know location of nearest eyewash station or clean water</li>
				<li>Keep burn gel readily available for torch accidents</li>
				<li>Maintain emergency contact information visible</li>
				<li>Practice proper lifting techniques for heavy equipment</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Maintenance and Longevity" columns={3}>
		<div>
			<h3>Daily Maintenance</h3>
			<ul>
				<li>Clean Still Air Box interior with 70% alcohol</li>
				<li>Check temperature monitoring systems</li>
				<li>Inspect lighting for proper function</li>
				<li>Clean work surfaces thoroughly</li>
			</ul>
		</div>
		<div>
			<h3>Weekly Maintenance</h3>
			<ul>
				<li>Deep clean all equipment with appropriate disinfectants</li>
				<li>Check pressure cooker seals and safety valves</li>
				<li>Test pH meter calibration</li>
				<li>Organize chemical storage areas</li>
			</ul>
		</div>
		<div>
			<h3>Monthly Maintenance</h3>
			<ul>
				<li>Replace worn torch tips or damaged tools</li>
				<li>Calibrate scale with certified weights</li>
				<li>Update safety equipment (first aid supplies)</li>
				<li>Review and update protocols based on experience</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Conclusion: Professional Results on a Home Budget" columns={1}>
		<p>Creating an effective plant tissue culture laboratory at home is not only possible but highly practical with the right equipment alternatives. By investing in quality basic equipment and maintaining strict protocols, you can achieve results comparable to professional laboratories at a fraction of the cost.</p>
		
		<p>The key to success lies not in expensive equipment, but in understanding proper sterile technique, maintaining consistent environmental conditions, and following proven protocols. Your home laboratory setup will serve as an excellent learning platform and can easily be upgraded with professional equipment as your skills and needs develop.</p>
		
		<p>Remember that many commercial tissue culture operations started with similar humble beginnings. Focus on mastering the fundamentals with your affordable setup, and you'll be well-prepared for any future expansion of your tissue culture capabilities.</p>
		
		<p><strong>Start small, learn thoroughly, and grow confidently into this fascinating field of plant propagation.</strong></p>
	</ContentBlock>
</ProtocolLayout>

<style>
	/* Equipment Table - Excel Style */
	.equipment-table-wrapper {
		overflow-x: auto;
		margin: 20px 0;
	}
	
	.equipment-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 14px;
		line-height: 1.5;
	}
	
	.equipment-table thead th {
		background: #2c2c2c;
		color: #fff;
		font-weight: 600;
		padding: 12px;
		text-align: left;
		border: 1px solid #000;
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}
	
	.equipment-table tbody td {
		padding: 16px 12px;
		border: 1px solid #ddd;
		vertical-align: top;
		background: #fff;
	}
	
	.equipment-table tbody tr:nth-child(even) {
		background: #fafafa;
	}
	
	.equipment-table tbody tr:nth-child(even) td {
		background: #fafafa;
	}
	
	.equipment-table .home-alt {
		background: #f0f8f0 !important;
		border-left: 3px solid #4a9d4a;
	}
	
	.equipment-table .detail {
		font-size: 12px;
		color: #666;
		line-height: 1.6;
	}
	
	.equipment-table strong {
		color: #222;
		font-weight: 600;
	}
	
	/* Total cost row styling */
	.equipment-table .total-row {
		border-top: 3px solid #000;
		background: #f8f8f8 !important;
		font-weight: 600;
	}
	
	.equipment-table .total-row td {
		padding: 20px 12px;
	}
	
	.equipment-table .total-row td.professional-total {
		background: #fff9e6 !important;
	}
	
	.equipment-table .total-row td.home-total {
		background: #f0f8f0 !important;
		border-left: 3px solid #4a9d4a;
	}
	
	.equipment-table .highlight {
		color: #4a9d4a;
		font-size: 16px;
		display: block;
		margin-top: 8px;
	}
	
	.equipment-table .common-note {
		font-size: 11px;
		color: #888;
		font-weight: 400;
		font-style: italic;
		display: block;
		margin-top: 4px;
	}
	
	/* Other tables */
	h3 {
		margin: 24px 0 12px 0;
		font-size: 20px;
		font-weight: 600;
	}
	
	table {
		width: 100%;
		border-collapse: collapse;
		margin: 20px 0;
	}
	
	th, td {
		padding: 12px;
		text-align: left;
		border: 1px solid #ddd;
	}
	
	th {
		background: #f5f5f5;
		font-weight: 600;
	}
	
	/* Responsive */
	@media (max-width: 768px) {
		.equipment-table {
			font-size: 12px;
		}
		
		.equipment-table thead th {
			padding: 8px;
			font-size: 11px;
		}
		
		.equipment-table tbody td {
			padding: 10px 8px;
		}
	}
	
</style>
