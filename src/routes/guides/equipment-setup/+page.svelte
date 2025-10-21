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
	<ContentBlock title="Essential Equipment and Affordable Alternatives">
		<h3>1. Sterile Work Environment</h3>
		<div class="comparison">
			<div class="option professional">
				<strong>Professional Option:</strong> Laminar Flow Hood ({convertPriceRange(3000, 10000, $currency)})
				<ul>
					<li>Creates sterile airflow through HEPA filtration</li>
					<li>Maintains positive pressure barrier</li>
				</ul>
			</div>
			<div class="option home">
				<strong>Home Alternative:</strong> Still Air Box (SAB) ({convertPriceRange(20, 50, $currency)})
				<ul>
					<li>Large plastic storage container with armholes</li>
					<li>Creates contained environment with minimal air movement</li>
					<li>Allows airborne particles to settle naturally</li>
				</ul>
			</div>
		</div>
		
		<p><strong>Setup Steps:</strong></p>
		<ol>
			<li>Choose a clear plastic storage container (minimum 50L capacity)</li>
			<li>Cut armholes in opposite sides (8-10 inches diameter)</li>
			<li>Sand edges smooth to prevent injuries</li>
			<li>Clean interior with 70% isopropyl alcohol before each use</li>
			<li>Allow surfaces to dry completely before beginning work</li>
		</ol>
		
		<h3>2. Sterilization Equipment</h3>
		<div class="comparison">
			<div class="option professional">
				<strong>Professional Option:</strong> Autoclave ({convertPriceRange(2000, 15000, $currency)})
				<ul>
					<li>Uses high-pressure steam for complete sterilization</li>
				</ul>
			</div>
			<div class="option home">
				<strong>Home Alternative:</strong> Digital Pressure Cooker ({convertPriceRange(50, 150, $currency)})
				<ul>
					<li>Maintains {convertTemp(121, $unitSystem)} temperature under pressure</li>
					<li>Effectively sterilizes glassware and media</li>
				</ul>
			</div>
		</div>
		
		<p><strong>Sterilization Protocol:</strong></p>
		<ol>
			<li>Fill pressure cooker with appropriate water level</li>
			<li>Place items in sterilization containers</li>
			<li>Set to high pressure (15 psi minimum)</li>
			<li>Maintain {convertTemp(121, $unitSystem)} for 20 minutes minimum</li>
			<li>Allow natural pressure release before opening</li>
		</ol>
		
		<h3>3. Tool Sterilization</h3>
		<div class="comparison">
			<div class="option professional">
				<strong>Professional Option:</strong> Dry Heat Sterilizer ({convertPriceRange(500, 2000, $currency)})
			</div>
			<div class="option home">
				<strong>Home Alternative:</strong> Butane Torch ({convertPriceRange(15, 30, $currency)})
				<ul>
					<li>Instant sterilization of metal tools</li>
					<li>Heat tools to red-hot temperature</li>
					<li>Allow cooling in sterile environment before use</li>
				</ul>
			</div>
		</div>
		
		<h3>4. Media Preparation Equipment</h3>
		<p><strong>Essential Items:</strong></p>
		<ul>
			<li><strong>Digital Scale:</strong> 0.01g precision minimum ({convertPriceRange(30, 80, $currency)})</li>
			<li><strong>Glass Beakers:</strong> Heat-resistant borosilicate ({convertPriceRange(20, 50, $currency)} set)</li>
			<li><strong>pH Meter or Strips:</strong> 5.6-5.8 range critical ({convertPriceRange(25, 100, $currency)})</li>
			<li><strong>Magnetic Stirrer:</strong> For consistent mixing ({convertPriceRange(50, 150, $currency)})</li>
			<li><strong>Measuring Cylinders:</strong> Various sizes for accuracy ({convertPriceRange(30, 60, $currency)})</li>
		</ul>
		
		<h3>5. Growth Environment</h3>
		<p><strong>Lighting System:</strong></p>
		<ul>
			<li><strong>LED Grow Lights:</strong> Full spectrum panels ({convertPriceRange(50, 200, $currency)})</li>
			<li><strong>Timer:</strong> Automated 16h light/8h dark cycle ({convertPriceRange(15, 30, $currency)})</li>
			<li><strong>Light Intensity:</strong> 30-50 μmol m⁻²s⁻¹ (moderate intensity)</li>
		</ul>
		
		<p><strong>Temperature Control:</strong></p>
		<ul>
			<li>Maintain {convertTemp(22, $unitSystem)}-{convertTemp(25, $unitSystem)} consistently</li>
			<li>Use room heater/AC or heated growing chamber</li>
			<li>Monitor with digital thermometer ({convertPriceRange(10, 25, $currency)})</li>
		</ul>
	</ContentBlock>
	
	<ContentBlock title="Step-by-Step Home Lab Setup">
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
	</ContentBlock>
	
	<ContentBlock title="Cost Comparison and Budget Planning">
		<table>
			<thead>
				<tr>
					<th>Setup Type</th>
					<th>Key Equipment</th>
					<th>Total Cost</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Professional Laboratory</strong></td>
					<td>
						• Laminar flow hood: {convertPriceRange(5000, 15000, $currency)}<br>
						• Autoclave: {convertPriceRange(3000, 10000, $currency)}<br>
						• Growth chamber: {convertPriceRange(2000, 5000, $currency)}
					</td>
					<td><strong>{convertPriceRange(10000, 30000, $currency)}</strong></td>
				</tr>
				<tr>
					<td><strong>Home Alternative</strong></td>
					<td>
						• Still Air Box setup: {convertPriceRange(50, 100, $currency)}<br>
						• Digital pressure cooker: {convertPriceRange(100, 200, $currency)}<br>
						• LED lighting system: {convertPriceRange(100, 250, $currency)}<br>
						• Basic equipment and tools: {convertPriceRange(150, 250, $currency)}
					</td>
					<td><strong>{convertPriceRange(300, 800, $currency)}</strong></td>
				</tr>
			</tbody>
		</table>
		<p><strong>Total savings: 95-97% cost reduction while maintaining effectiveness</strong></p>
	</ContentBlock>
	
	<ContentBlock title="Safety Considerations">
		<h3>Chemical Handling</h3>
		<ul>
			<li>Always wear nitrile gloves when handling bleach solutions</li>
			<li>Use eye protection with chemical-resistant lenses</li>
			<li>Ensure adequate ventilation when preparing media</li>
			<li>Store chemicals according to manufacturer specifications</li>
		</ul>
		
		<h3>Equipment Safety</h3>
		<ul>
			<li>Never leave pressure cooker unattended during sterilization</li>
			<li>Allow torch-heated tools to cool completely before handling</li>
			<li>Regularly inspect Still Air Box for cracks or damage</li>
			<li>Keep workspace organized to prevent accidents</li>
		</ul>
		
		<h3>Emergency Procedures</h3>
		<ul>
			<li>Know location of nearest eyewash station or clean water</li>
			<li>Keep burn gel readily available for torch accidents</li>
			<li>Maintain emergency contact information visible</li>
			<li>Practice proper lifting techniques for heavy equipment</li>
		</ul>
	</ContentBlock>
	
	<ContentBlock title="Maintenance and Longevity">
		<h3>Daily Maintenance</h3>
		<ul>
			<li>Clean Still Air Box interior with 70% alcohol</li>
			<li>Check temperature monitoring systems</li>
			<li>Inspect lighting for proper function</li>
			<li>Clean work surfaces thoroughly</li>
		</ul>
		
		<h3>Weekly Maintenance</h3>
		<ul>
			<li>Deep clean all equipment with appropriate disinfectants</li>
			<li>Check pressure cooker seals and safety valves</li>
			<li>Test pH meter calibration</li>
			<li>Organize chemical storage areas</li>
		</ul>
		
		<h3>Monthly Maintenance</h3>
		<ul>
			<li>Replace worn torch tips or damaged tools</li>
			<li>Calibrate scale with certified weights</li>
			<li>Update safety equipment (first aid supplies)</li>
			<li>Review and update protocols based on experience</li>
		</ul>
	</ContentBlock>
	
	<ContentBlock title="Conclusion: Professional Results on a Home Budget" columns={1}>
		<p>Creating an effective plant tissue culture laboratory at home is not only possible but highly practical with the right equipment alternatives. By investing in quality basic equipment and maintaining strict protocols, you can achieve results comparable to professional laboratories at a fraction of the cost.</p>
		
		<p>The key to success lies not in expensive equipment, but in understanding proper sterile technique, maintaining consistent environmental conditions, and following proven protocols. Your home laboratory setup will serve as an excellent learning platform and can easily be upgraded with professional equipment as your skills and needs develop.</p>
		
		<p>Remember that many commercial tissue culture operations started with similar humble beginnings. Focus on mastering the fundamentals with your affordable setup, and you'll be well-prepared for any future expansion of your tissue culture capabilities.</p>
		
		<p><strong>Start small, learn thoroughly, and grow confidently into this fascinating field of plant propagation.</strong></p>
	</ContentBlock>
</ProtocolLayout>

<style>
	.comparison {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		margin: 20px 0;
	}
	
	.option {
		padding: 16px;
		border-radius: 8px;
		border: 1px solid #ddd;
	}
	
	.option.professional {
		background: #f9f9f9;
	}
	
	.option.home {
		background: #f0f8f0;
		border-color: #4a9d4a;
	}
	
	.option strong {
		display: block;
		margin-bottom: 8px;
		color: #222;
	}
	
	.option ul {
		margin: 8px 0 0 20px;
		font-size: 14px;
	}
	
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
		.comparison {
			grid-template-columns: 1fr;
		}
	}
</style>
