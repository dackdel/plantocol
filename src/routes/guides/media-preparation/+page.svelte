<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertWeight, displayPH } from '$lib/utils/unitConversions';
	
	const title = 'Media Preparation<br>Complete Technical Guide';
	const badges = [
		'Difficulty: Intermediate',
		'Preparation Time: 2-3 Hours',
		'Skill Level: Technical'
	];
	const introColumns = [
		'Media preparation is the foundation of successful plant tissue culture. Understanding the differences between rooting and multiplication media—and knowing how to prepare them correctly—can dramatically improve your propagation success rates.',
		'This comprehensive guide teaches everything from basic principles to advanced formulations. You\'ll learn the art and science of creating perfect growing environments for every stage of plant development.',
		'Success in tissue culture depends on precision, consistency, and attention to detail. The difference between multiplication and rooting media lies primarily in hormonal composition, but successful implementation requires understanding the subtle interplay of all components.'
	];
	const source = '';
</script>

<svelte:head>
	<title>Media Preparation Guide - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Understanding Media Types">
		<h3>What Is Culture Media?</h3>
		<p>Culture media serves as a complete life-support system for plant tissues growing in vitro. It provides all the nutrients, energy sources, and chemical signals needed for healthy development in a controlled, sterile environment.</p>
		
		<h3>Key Differences: Multiplication vs. Rooting Media</h3>
		<div class="comparison">
			<div class="media-type multiplication">
				<h4>Multiplication Media</h4>
				<ul>
					<li><strong>Primary Goal:</strong> Induce shoot formation and increase plantlet numbers</li>
					<li><strong>Hormonal Focus:</strong> High cytokinin-to-auxin ratio promotes cell division</li>
					<li><strong>Growth Pattern:</strong> Encourages multiple shoot formation from single explants</li>
					<li><strong>Timeline:</strong> Typically used for 4-6 weeks per subculture cycle</li>
				</ul>
			</div>
			<div class="media-type rooting">
				<h4>Rooting Media</h4>
				<ul>
					<li><strong>Primary Goal:</strong> Support root formation in developed shoots</li>
					<li><strong>Hormonal Focus:</strong> High auxin-to-cytokinin ratio stimulates roots</li>
					<li><strong>Growth Pattern:</strong> Promotes strong root system development</li>
					<li><strong>Timeline:</strong> Usually 2-4 weeks for adequate root establishment</li>
				</ul>
			</div>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Essential Media Components" columns={2}>
		<div>
			<h3>1. Macronutrients: The Building Blocks</h3>
			<p><strong>Function:</strong> Provide essential elements for plant growth</p>
			<ul>
				<li><strong>Nitrogen (N):</strong> Protein synthesis and chlorophyll production</li>
				<li><strong>Phosphorus (P):</strong> Energy transfer and root development</li>
				<li><strong>Potassium (K):</strong> Water regulation and disease resistance</li>
				<li><strong>Standard Source:</strong> <Term abbr="MS" /> (Murashige and Skoog) salts provide optimal balance</li>
			</ul>
			
			<h3>2. Micronutrients: The Catalysts</h3>
			<p><strong>Function:</strong> Enable enzymatic functions and metabolic processes</p>
			<ul>
				<li><strong>Iron (Fe):</strong> Chlorophyll synthesis and electron transport</li>
				<li><strong>Manganese (Mn):</strong> Photosynthesis and nitrogen metabolism</li>
				<li><strong>Zinc (Zn):</strong> Enzyme activation and growth regulation</li>
				<li><strong>Copper (Cu):</strong> Electron transport and cell wall formation</li>
				<li><strong>Molybdenum (Mo):</strong> Nitrogen fixation processes</li>
				<li><strong>Boron (B):</strong> Cell wall formation and carbohydrate transport</li>
			</ul>
			
			<h3>3. Vitamins: The Metabolic Enhancers</h3>
			<ul>
				<li><strong>Thiamine (Vitamin B1):</strong> Carbohydrate metabolism</li>
				<li><strong>Pyridoxine (Vitamin B6):</strong> Amino acid metabolism</li>
				<li><strong>Nicotinic Acid (Niacin):</strong> Energy production processes</li>
			</ul>
		</div>
		<div>
			<h3>4. Growth Regulators: The Control System</h3>
			<p><strong><Term abbr="cytokinin" />s</strong> (Promote Shoot Development):</p>
			<ul>
				<li><strong><Term abbr="BAP" /> (6-Benzylaminopurine):</strong> Most commonly used, highly effective</li>
				<li><strong>Kinetin:</strong> Natural <Term abbr="cytokinin" />, gentler action</li>
				<li><strong><Term abbr="TDZ" /> (Thidiazuron):</strong> Very potent, use in lower concentrations</li>
			</ul>
			
			<p><strong><Term abbr="auxin" />s</strong> (Promote Root Development):</p>
			<ul>
				<li><strong><Term abbr="IBA" /> (Indole-3-butyric acid):</strong> Stable and effective for rooting</li>
				<li><strong><Term abbr="NAA" /> (Naphthaleneacetic acid):</strong> Strong <Term abbr="auxin" />, use carefully</li>
				<li><strong><Term abbr="IAA" /> (Indole-3-acetic acid):</strong> Natural <Term abbr="auxin" />, less stable</li>
			</ul>
			
			<h3>5. Carbon Source: The Energy Provider</h3>
			<ul>
				<li><strong><Term abbr="Sucrose" />:</strong> Standard choice at {convertWeight(20, $unitSystem)}-{convertWeight(30, $unitSystem)}/L concentration</li>
				<li><strong>Alternative Options:</strong> <Term abbr="Glucose" /> or maltose for specific applications</li>
				<li><strong>Function:</strong> Provides energy since photosynthesis is limited in culture vessels</li>
			</ul>
			
			<h3>6. Gelling Agent: The Support Matrix</h3>
			<ul>
				<li><strong><Term abbr="Agar" />:</strong> Traditional choice, {convertWeight(7, $unitSystem)}-{convertWeight(8, $unitSystem)}/L concentration</li>
				<li><strong><Term abbr="Gellan gum" />:</strong> Clearer medium, easier <Term abbr="contamination" /> detection</li>
				<li><strong><Term abbr="Phytagel" />:</strong> Alternative for species-sensitive to <Term abbr="agar" /></li>
			</ul>
			
			<h3>7. pH Adjusters: The Balance Keepers</h3>
			<ul>
				<li><strong>Target Range:</strong> {displayPH(5.6)}-{displayPH(5.8)} for optimal nutrient uptake</li>
				<li><strong>Basic Adjuster:</strong> Sodium hydroxide (NaOH) for raising pH</li>
				<li><strong>Acidic Adjuster:</strong> Hydrochloric acid (HCl) for lowering pH</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Specific Media Formulations" columns={2}>
		<div>
			<h3>Multiplication Media Recipe (<Term abbr="MS" />-Based)</h3>
			<p><strong>Base Components</strong> (per liter):</p>
			<ul>
				<li><Term abbr="MS" /> basal salts: {convertWeight(4.4, $unitSystem)}</li>
				<li><Term abbr="Sucrose" />: {convertWeight(30, $unitSystem)}</li>
				<li><Term abbr="Agar" />: {convertWeight(8, $unitSystem)}</li>
				<li><Term abbr="Distilled water" />: to 1000 ml</li>
			</ul>
			
			<p><strong>Hormone Addition:</strong></p>
			<ul>
				<li><strong><Term abbr="BAP" /> (<Term abbr="cytokinin" />):</strong> 0.5-2.0 mg/L</li>
				<li><strong><Term abbr="IAA" /> (<Term abbr="auxin" />):</strong> 0.1-0.5 mg/L</li>
				<li><strong>Ratio:</strong> High <Term abbr="cytokinin" /> to low <Term abbr="auxin" /> (4:1 to 10:1)</li>
			</ul>
			
			<p><strong>Vitamin Supplements</strong> (optional but recommended):</p>
			<ul>
				<li><Term abbr="Thiamine" /> HCl: 0.1 mg/L</li>
				<li><Term abbr="Pyridoxine" /> HCl: 0.5 mg/L</li>
				<li><Term abbr="Nicotinic acid" />: 0.5 mg/L</li>
				<li>Myo-inositol: 100 mg/L</li>
			</ul>
		</div>
		<div>
			<h3>Rooting Media Recipe (<Term abbr="MS" />-Based)</h3>
			<p><strong>Base Components</strong> (per liter):</p>
			<ul>
				<li><Term abbr="MS" /> basal salts: {convertWeight(4.4, $unitSystem)} (sometimes half-strength: {convertWeight(2.2, $unitSystem)})</li>
				<li><Term abbr="Sucrose" />: {convertWeight(20, $unitSystem)} (reduced from <Term abbr="multiplication" /> media)</li>
				<li><Term abbr="Agar" />: {convertWeight(8, $unitSystem)}</li>
				<li><Term abbr="Distilled water" />: to 1000 ml</li>
			</ul>
			
			<p><strong>Hormone Addition:</strong></p>
			<ul>
				<li><strong><Term abbr="IBA" /> (<Term abbr="auxin" />):</strong> 1.0-5.0 mg/L</li>
				<li><strong><Term abbr="cytokinin" />:</strong> 0.1 mg/L or completely omitted</li>
				<li><strong>Ratio:</strong> High <Term abbr="auxin" /> to no/low <Term abbr="cytokinin" /></li>
			</ul>
			
			<p><strong>Alternative Formulations:</strong></p>
			<ul>
				<li><strong>Hormone-Free:</strong> Some species root better without added hormones</li>
				<li><strong><Term abbr="NAA" /> Alternative:</strong> 0.5-2.0 mg/L <Term abbr="NAA" /> instead of <Term abbr="IBA" /> for stubborn species</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Step-by-Step Media Preparation Protocol" columns={2}>
		<div>
			<h3>Step 1: Preparation of Stock Solutions</h3>
			<p><strong>Purpose:</strong> Ensures accuracy and consistency across batches</p>
			<ol>
				<li><strong><Term abbr="Macronutrients" /> Stock</strong> (10x concentration):
					<ul>
						<li>Dissolve 44 g <Term abbr="MS" /> salts in 1L distilled water</li>
						<li>Store at {convertTemp(4, $unitSystem)} for up to 6 months</li>
					</ul>
				</li>
				<li><strong>Vitamin Stock</strong> (1000x concentration):
					<ul>
						<li>Prepare individual vitamin solutions</li>
						<li>Store frozen in small aliquots</li>
						<li>Use within 3 months</li>
					</ul>
				</li>
				<li><strong>Hormone Stock Solutions</strong> (1000x concentration):
					<ul>
						<li>Dissolve hormones in small amount of 1N NaOH or ethanol</li>
						<li>Dilute to final volume with distilled water</li>
						<li>Store frozen, use within 1 year</li>
					</ul>
				</li>
			</ol>
			
			<h3>Step 2: Base Media Preparation</h3>
			<ol>
				<li><strong>Dissolve Basal Salts:</strong> Add stock solution to distilled water, stir until dissolved using magnetic stirrer</li>
				<li><strong>Add Sucrose:</strong> Add required amount, stir until no crystals remain</li>
				<li><strong>Add Vitamins:</strong> Add vitamin stock solutions and mix thoroughly</li>
			</ol>
			
			<h3>Step 3: Hormone Addition</h3>
			<ol>
				<li>Calculate exact volumes needed based on final concentrations</li>
				<li>Add hormone stock solutions slowly while stirring, ensure complete dissolution</li>
			</ol>
		</div>
		<div>
			<h3>Step 4: pH Adjustment</h3>
			<ol>
				<li><strong>Initial Measurement:</strong> Use calibrated pH meter ({displayPH(5.6)}-{displayPH(5.8)} target)</li>
				<li><strong>Adjustment Process:</strong> Add 1N HCl to lower or 1N NaOH to raise pH dropwise, mix thoroughly between additions</li>
			</ol>
			
			<h3>Step 5: Volume Adjustment & Gelling Agent</h3>
			<ol>
				<li>Add distilled water to reach final volume</li>
				<li>Weigh agar precisely ({convertWeight(8, $unitSystem)} per liter)</li>
				<li>Heat in microwave in short bursts (30-60 seconds)</li>
				<li>Stir between heating cycles until completely dissolved and clear</li>
			</ol>
			
			<h3>Step 6: Dispensing & Sterilization</h3>
			<p><strong>Container Filling:</strong></p>
			<ul>
				<li>15-20 ml per culture tube</li>
				<li>40-50 ml per culture jar</li>
			</ul>
			<p><strong>Autoclave Settings:</strong></p>
			<ul>
				<li>Temperature: {convertTemp(121, $unitSystem)}</li>
				<li>Pressure: 15 psi</li>
				<li>Time: 15-20 minutes</li>
			</ul>
			<p><strong>Storage:</strong></p>
			<ul>
				<li>Cool to room temperature before handling</li>
				<li>Store at room temperature for immediate use</li>
				<li>Refrigerate for longer storage (up to 1 month)</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Advanced Techniques and Troubleshooting" columns={2}>
		<div>
			<h3>Species-Specific Adaptations</h3>
			
			<p><strong>Woody Plants:</strong></p>
			<ul>
				<li><strong><Term abbr="WPM" /> (Woody Plant Medium):</strong> Often better than <Term abbr="MS" /> for trees and shrubs</li>
				<li><strong>Lower Salt Concentrations:</strong> Reduce standard <Term abbr="MS" /> to half-strength</li>
				<li><strong>Antioxidants:</strong> Add <Term abbr="ascorbic acid" /> to prevent <Term abbr="browning" /></li>
			</ul>
			
			<p><strong>Orchids:</strong></p>
			<ul>
				<li><strong>VW (Vacin & Went) Medium:</strong> Specifically formulated for orchids</li>
				<li><strong>Banana Extract:</strong> Natural supplement for enhanced growth</li>
				<li><strong>Coconut Water:</strong> Natural <Term abbr="cytokinin" /> source</li>
			</ul>
			
			<p><strong>Ferns:</strong></p>
			<ul>
				<li><strong>Modified <Term abbr="MS" />:</strong> Reduced nitrogen concentrations</li>
				<li><strong>Lower <Term abbr="pH" />:</strong> Target {displayPH(5.0)}-{displayPH(5.5)} instead of standard range</li>
				<li><strong>Specialized Vitamins:</strong> Enhanced B-vitamin complex</li>
			</ul>
		</div>
		<div>
			<h3>Troubleshooting Common Media Issues</h3>
			
			<table>
				<thead>
					<tr>
						<th>Problem</th>
						<th>Cause</th>
						<th>Solution</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>Poor Shoot Multiplication</strong></td>
						<td>Insufficient cytokinin</td>
						<td>Increase <Term abbr="BAP" /> to 1.5-3.0 mg/L or switch <Term abbr="cytokinin" /> type</td>
					</tr>
					<tr>
						<td><strong>Inadequate Rooting</strong></td>
						<td>Low auxin concentration</td>
						<td>Increase <Term abbr="IBA" /> to 2-7 mg/L or try <Term abbr="NAA" /></td>
					</tr>
					<tr>
						<td><strong>Contamination Issues</strong></td>
						<td>Poor sterilization</td>
						<td>Add PPM, extend autoclave time by 5 minutes</td>
					</tr>
					<tr>
						<td><strong>Hyperhydricity (Vitrification)</strong></td>
						<td>Excessive moisture/agar</td>
						<td>Reduce <Term abbr="agar" /> to {convertWeight(6, $unitSystem)}-{convertWeight(7, $unitSystem)}/L or switch to <Term abbr="gellan gum" /></td>
					</tr>
					<tr>
						<td><strong><Term abbr="phenolic" /> <Term abbr="browning" /></strong></td>
						<td>Oxidation of phenolics</td>
						<td>Add <Term abbr="activated charcoal" /> (0.5-2.0 g/L) or antioxidants</td>
					</tr>
				</tbody>
			</table>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Quality Control and Best Practices" columns={2}>
		<div>
			<h3>Batch Documentation</h3>
			<p><strong>Essential Records:</strong></p>
			<ul>
				<li>Date of preparation</li>
				<li>Exact formulation used</li>
				<li>pH before and after sterilization</li>
				<li>Sterilization cycle details</li>
				<li>Performance observations</li>
			</ul>
			
			<h3>Multiplication Media Success Metrics</h3>
			<ul>
				<li>Number of shoots per explant</li>
				<li>Time to shoot development</li>
				<li>Overall health and vigor</li>
			</ul>
		</div>
		<div>
			<h3>Rooting Media Success Metrics</h3>
			<ul>
				<li>Percentage of shoots that root</li>
				<li>Root length and density</li>
				<li>Time to root development</li>
			</ul>
			
			<h3>Safety and Best Practices</h3>
			<ul>
				<li><strong>Personal Protection:</strong> Always wear gloves and safety glasses</li>
				<li><strong>Ventilation:</strong> Ensure adequate air circulation when handling chemicals</li>
				<li><strong>Storage:</strong> Follow manufacturer's storage recommendations</li>
				<li><strong>Cleanliness:</strong> Maintain spotless work environment</li>
				<li><strong>Consistency:</strong> Follow protocols exactly for reproducible results</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Conclusion: Precision Creates Success" columns={1}>
		<p>Media preparation is both an art and a science, requiring precision, consistency, and attention to detail. The difference between multiplication and rooting media lies primarily in hormonal composition, but successful implementation requires understanding the subtle interplay of all components.</p>
		
		<h4>Keys to Media Preparation Success:</h4>
		<ol>
			<li><strong>Understand the Biology:</strong> Know how hormones affect plant development</li>
			<li><strong>Maintain Precision:</strong> Accurate measurements are critical for success</li>
			<li><strong>Document Everything:</strong> Detailed records enable continuous improvement</li>
			<li><strong>Start with Standards:</strong> Use proven formulations before attempting modifications</li>
			<li><strong>Quality Ingredients:</strong> Invest in high-quality chemicals and pure water</li>
		</ol>
		
		<p>The foundation of successful tissue culture lies in perfectly prepared media. Master these formulations and techniques, and you'll have the tools needed to propagate virtually any plant species with confidence and consistency.</p>
		
		<p><strong>Perfect media preparation is the gateway to unlimited plant propagation possibilities.</strong></p>
	</ContentBlock>
</ProtocolLayout>

<style>
	.comparison {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		margin: 20px 0;
	}
	
	.media-type {
		padding: 20px;
		border-radius: 8px;
		border: 2px solid;
	}
	
	.media-type.multiplication {
		background: #f0f8ff;
		border-color: #4a90e2;
	}
	
	.media-type.rooting {
		background: #f0fff4;
		border-color: #4a9d4a;
	}
	
	.media-type h4 {
		margin-top: 0;
		margin-bottom: 12px;
		font-size: 18px;
		font-weight: 600;
	}
	
	.media-type ul {
		margin: 0;
		padding-left: 20px;
		font-size: 14px;
	}
	
	.media-type li {
		margin-bottom: 8px;
	}
	
	h3 {
		margin: 32px 0 16px 0;
		font-size: 20px;
		font-weight: 600;
	}
	
	h4 {
		margin: 20px 0 12px 0;
		font-size: 17px;
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
