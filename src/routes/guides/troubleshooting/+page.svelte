<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, displayPH } from '$lib/utils/unitConversions';
	
	const title = 'Troubleshooting Guide<br>Solutions to Common Problems';
	const badges = [
		'11 Common Issues',
		'Expert Solutions',
		'Prevention Strategies'
	];
	const introColumns = [
		'Even experienced tissue culturists encounter challenges during their propagation journey. From contamination disasters to mysterious growth failures, problems are inevitable—but they\'re also solvable.',
		'This comprehensive troubleshooting guide provides practical solutions to the most common issues you\'ll face, helping you maintain healthy cultures and achieve consistent success.',
		'Remember that every expert was once a beginner who refused to give up when faced with problems. Your persistence in solving problems today builds the expertise for tomorrow\'s successes.'
	];
	const source = '';
</script>

<svelte:head>
	<title>Troubleshooting Guide - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="1. Contamination: The Silent Culture Killer" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge critical">Critical</span>
				<h3>Problem Description</h3>
			</div>
			<p>Bacteria, fungi, molds, and yeasts invading your sterile cultures, leading to complete culture failure. Contaminants can enter from external sources or exist internally within plant tissue as <Term abbr="endophytes" />.</p>
			
			<h4>Prevention Strategies</h4>
			<ul>
				<li><strong>Maintain Clean Culture Room:</strong> Regularly disinfect all surfaces with 70% ethanol</li>
				<li><strong>Use Proper Work Environment:</strong> Laminar flow hood or <Term abbr="SAB" /> for all manipulations</li>
				<li><strong>Sterilize Everything:</strong> All media, vessels, tools, and water via autoclaving ({convertTemp(121, $unitSystem)}, 15 psi, 15-20 minutes)</li>
				<li><strong>Perfect Surface Sterilization:</strong> Use 1-10% sodium hypochlorite solution followed by multiple sterile water rinses</li>
				<li><strong>Consider <Term abbr="PPM" />™:</strong> Plant Preservative Mixture can suppress contamination (follow dosage carefully)</li>
			</ul>
		</div>
		<div>
			<h4>Solution Steps</h4>
			<ol>
				<li><strong>Immediate Isolation:</strong> Remove contaminated cultures from clean area</li>
				<li><strong>Assess Damage:</strong> Determine if any clean tissue remains salvageable</li>
				<li><strong>Re-sterilization:</strong> If tissue remains healthy, re-sterilize and transfer to fresh media</li>
				<li><strong>Protocol Review:</strong> Examine your aseptic technique for potential breach points</li>
				<li><strong>Environmental Check:</strong> Inspect workspace for contamination sources</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="2. Vitrification (Hyperhydricity): The Glass Plant Syndrome" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge moderate">Moderate</span>
				<h3>Problem Description</h3>
			</div>
			<p>Plants develop thick, glassy, brittle leaves and stems with translucent appearance. This physiological disorder results from oxidative stress and disrupted cell wall formation.</p>
			
			<h4>Causes</h4>
			<ul>
				<li>High salt or sugar concentrations in medium</li>
				<li>Excessive humidity within culture vessel</li>
				<li>Insufficient light intensity</li>
				<li>Ethylene gas accumulation</li>
				<li>Prolonged subculture intervals</li>
				<li>High <Term abbr="cytokinin" /> levels</li>
				<li>Excessive agar concentration</li>
			</ul>
		</div>
		<div>
			<h4>Control Solutions</h4>
			<ol>
				<li><strong>Improve Ventilation:</strong> Use gas-permeable lids or periodically open vessels under sterile conditions</li>
				<li><strong>Increase Light:</strong> Boost intensity or adjust light spectrum</li>
				<li><strong>Reduce Agar:</strong> Lower concentration or switch to gellan gum</li>
				<li><strong>Shorten Subcultures:</strong> Transfer to fresh media more frequently</li>
				<li><strong>Balance Hormones:</strong> Reduce <Term abbr="cytokinin" /> concentrations</li>
				<li><strong>Add Activated Charcoal:</strong> Absorbs excess gases and inhibitory compounds</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="3. Browning of Media and Explants: Phenolic Oxidation" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge moderate">Moderate</span>
				<h3>Problem Description</h3>
			</div>
			<p>Tissue and media turn brown due to <Term abbr="phenolic" /> compound oxidation, particularly common in woody plant species. This inhibits cell division and reduces regeneration capacity.</p>
			
			<h4>Prevention Solutions</h4>
			<ol>
				<li><strong>Activated Charcoal:</strong> Add to medium to absorb phenolic compounds</li>
				<li><strong>Antioxidants:</strong> Include ascorbic acid and citric acid to prevent oxidation</li>
				<li><strong>Polyphenol Inhibitors:</strong> Use compounds like sulfur dioxide or sodium chloride</li>
				<li><strong>Frequent Subculturing:</strong> Regular transfers prevent compound accumulation</li>
			</ol>
		</div>
		<div>
			<h4 style="margin-top: 53px;">More Solutions</h4>
			<ol start="5">
				<li><strong>Light Optimization:</strong> Reduce exposure to minimize phenolic synthesis</li>
				<li><strong>Pre-treatment:</strong> Soak explants in water to leach phenolic compounds</li>
				<li><strong>Explant Orientation:</strong> Try vertical placement to reduce browning</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="4. Recalcitrance: When Plants Refuse to Cooperate" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge severe">Severe</span>
				<h3>Problem Description</h3>
			</div>
			<p><Term abbr="recalcitrant" /> plant cells or tissues fail to adapt to in vitro conditions due to free radical damage to cellular macromolecules, causing complete dysfunction.</p>
			
			<h4>Overcoming Strategies</h4>
			<ol>
				<li><strong>Use Juvenile Material:</strong> Young plant tissues are more responsive to culture</li>
				<li><strong>Pre-treatment:</strong> Spray donor plants with cytokinins to rejuvenate tissues</li>
				<li><strong>Media Experimentation:</strong> Try different formulations with varying hormone concentrations</li>
			</ol>
		</div>
		<div>
			<h4 style="margin-top: 53px;">More Strategies</h4>
			<ol start="4">
				<li><strong>Explant Diversity:</strong> Test different tissue types (shoot tips, nodes, embryos)</li>
				<li><strong>Environment Optimization:</strong> Adjust light, temperature, and humidity conditions</li>
				<li><strong>Patience and Persistence:</strong> Some species require multiple attempts with slight modifications</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="5. Somaclonal Variation: Genetic Instability" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge moderate">Moderate</span>
				<h3>Problem Description</h3>
			</div>
			<p>Genetic or phenotypic variations arise from chromosomal alterations or DNA sequence changes during culture, affecting plant stability and uniformity.</p>
			
			<h4>Minimization Techniques</h4>
			<ol>
				<li><strong>Limit Culture Duration:</strong> Minimize time in culture and number of subcultures</li>
				<li><strong>Add Salicylic Acid:</strong> Growth regulator shown to reduce variation occurrence</li>
				<li><strong>Gentle Handling:</strong> Prevent physical damage during transfers (avoid hot instruments)</li>
				<li><strong>Avoid <Term abbr="2,4-D" />:</strong> High synthetic <Term abbr="auxin" /> concentrations increase variation</li>
			</ol>
		</div>
		<div>
			<h4 style="margin-top: 53px;">More Techniques</h4>
			<ol start="5">
				<li><strong>Use Axillary Buds:</strong> More genetically stable than callus culture</li>
				<li><strong>Minimize <Term abbr="callus" /> Phase:</strong> If using <Term abbr="callus" />, keep this stage as short as possible</li>
				<li><strong>Fresh Starts:</strong> Periodically reinitiate cultures from new explants</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="6. Acclimatization Failure: The Final Hurdle" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge critical">Critical</span>
				<h3>Problem Description</h3>
			</div>
			<p>Plants grown in sterile, controlled environments experience shock and die when transferred to natural greenhouse or soil conditions.</p>
			
			<h4>Success Strategies</h4>
			<ol>
				<li><strong>Strong Root Development:</strong> Optimize rooting medium before transplanting</li>
				<li><strong>Gradual Humidity Reduction:</strong> Progressively open culture vessels over days/weeks</li>
				<li><strong>Proper Potting Mix:</strong> Use well-draining, sterile growing medium</li>
			</ol>
		</div>
		<div>
			<h4 style="margin-top: 53px;">More Strategies</h4>
			<ol start="4">
				<li><strong>Initial Protection:</strong> Maintain high humidity and shade during transition</li>
				<li><strong>Gradual Exposure:</strong> Slowly introduce higher light intensity and lower humidity</li>
				<li><strong>Monitor Closely:</strong> Watch for wilting signs and adjust conditions accordingly</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="7. Explant Oxidation: Rapid Browning Response" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge severe">Severe</span>
				<h3>Problem Description</h3>
			</div>
			<p>Severe, rapid phenolic oxidation occurring immediately after explant excision—a critical form of tissue damage.</p>
			
			<h4>Prevention Steps</h4>
			<ol>
				<li><strong>Work Quickly:</strong> Minimize time between cutting and culture placement</li>
				<li><strong>Antioxidant Solution:</strong> Immediately immerse explants in chilled ascorbic acid or citric acid</li>
			</ol>
		</div>
		<div>
			<h4 style="margin-top: 53px;">More Steps</h4>
			<ol start="3">
				<li><strong>Activated Charcoal:</strong> Include in initial culture medium</li>
				<li><strong>Cold Treatment:</strong> Keep explants and solutions chilled during preparation</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="8. Nutritional Deficiencies: Starving Your Cultures" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge moderate">Moderate</span>
				<h3>Problem Description</h3>
			</div>
			<p>Improper media formulation leads to essential nutrient deficiencies, severely affecting growth and development.</p>
			
			<h4>Prevention Solutions</h4>
			<ol>
				<li><strong>Balanced Media:</strong> Ensure proper macro- and micronutrient ratios</li>
				<li><strong>Proven Formulations:</strong> Start with tested formulations like <Term abbr="MS" /> medium</li>
			</ol>
		</div>
		<div>
			<h4 style="margin-top: 53px;">More Solutions</h4>
			<ol start="3">
				<li><strong>Species-Specific Adjustments:</strong> Modify standard media for particular plant needs</li>
				<li><strong>Quality Control:</strong> Use fresh, high-quality chemicals and distilled water</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="9. Callus Overgrowth: Uncontrolled Cell Division" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge moderate">Moderate</span>
				<h3>Problem Description</h3>
			</div>
			<p>Excessive undifferentiated callus formation hinders shoot or root development, leading to poor-quality plants.</p>
			
			<h4>Control Methods</h4>
			<ol>
				<li><strong>Adjust Hormone Balance:</strong> Increase <Term abbr="cytokinin" />-to-<Term abbr="auxin" /> ratio for shoot development</li>
				<li><strong>Fresh Medium Transfer:</strong> Move callus to medium with adjusted hormone levels</li>
				<li><strong>Regular Monitoring:</strong> Track hormone ratios and adjust based on response</li>
			</ol>
		</div>
		<div>
			<h4 style="margin-top: 53px;">More Methods</h4>
			<ol start="4">
				<li><strong>Ethylene Management:</strong> Use inhibitors or reduce ethylene production</li>
				<li><strong>Antioxidants:</strong> Add compounds to enhance cell wall integrity</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="10. Slow Growth Rates: The Waiting Game" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge low">Low Priority</span>
				<h3>Problem Description</h3>
			</div>
			<p>Tissue cultures grow too slowly, significantly delaying the propagation process and reducing efficiency.</p>
			
			<h4>Acceleration Solutions</h4>
			<ol>
				<li><strong>Environment Optimization:</strong> Perfect temperature ({convertTemp(22, $unitSystem)}-{convertTemp(25, $unitSystem)}) and light conditions</li>
				<li><strong>Growth Stimulants:</strong> Add gibberellic acid (<Term abbr="GA3" />) to accelerate development</li>
			</ol>
		</div>
		<div>
			<h4 style="margin-top: 53px;">More Solutions</h4>
			<ol start="3">
				<li><strong><Term abbr="pH" /> Adjustment:</strong> Ensure media <Term abbr="pH" /> is correctly adjusted ({displayPH(5.6)}-{displayPH(5.8)})</li>
				<li><strong>Fresh Media:</strong> Replace old or degraded medium with fresh preparations</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="11. Rooting Issues: Failure to Develop Strong Roots" columns={2}>
		<div>
			<div class="problem-header">
				<span class="problem-badge moderate">Moderate</span>
				<h3>Problem Description</h3>
			</div>
			<p>Some species struggle to develop healthy, functional root systems in vitro, preventing successful acclimatization.</p>
			
			<h4>Solutions</h4>
			<ol>
				<li><strong>Hormone Adjustment:</strong> Include <Term abbr="IBA" /> or other rooting hormones in medium</li>
				<li><strong>Aeration:</strong> Provide root aeration in liquid culture systems</li>
				<li><strong>Dedicated Rooting Medium:</strong> Transfer shoots to high-<Term abbr="auxin" />, low-<Term abbr="cytokinin" /> medium</li>
			</ol>
		</div>
		<div>
			<h4 style="margin-top: 53px;">More Solutions</h4>
			<ol start="4">
				<li><strong>Environmental Modification:</strong> Darken culture vessels during rooting phase</li>
				<li><strong>Gelling Agent Changes:</strong> Try different agents or reduce agar concentration</li>
			</ol>
		</div>
	</ContentBlock>
	
	<ContentBlock title="General Troubleshooting Protocol" columns={2}>
		<div>
			<h3>Step 1: Observation and Documentation</h3>
			<ul>
				<li>Record all symptoms with photos and detailed notes</li>
				<li>Track environmental conditions and media compositions</li>
				<li>Note timing of problem appearance</li>
			</ul>
			
			<h3>Step 2: Systematic Analysis</h3>
			<ul>
				<li>Review recent protocol changes or environmental shifts</li>
				<li>Check equipment functionality and calibration</li>
				<li>Examine chemical quality and storage conditions</li>
			</ul>
		</div>
		<div>
			<h3>Step 3: Controlled Testing</h3>
			<ul>
				<li>Make single variable changes to isolate causes</li>
				<li>Test solutions on small culture batches first</li>
				<li>Compare with control cultures when possible</li>
			</ul>
			
			<h3>Step 4: Implementation and Monitoring</h3>
			<ul>
				<li>Apply solutions systematically across affected cultures</li>
				<li>Monitor progress with regular observations</li>
				<li>Adjust approaches based on response</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Prevention: The Best Medicine">
		<div class="prevention-grid">
			<div class="prevention-category">
				<h4>Daily Best Practices</h4>
				<ul>
					<li>Maintain consistent environmental conditions</li>
					<li>Follow strict aseptic protocols</li>
					<li>Monitor cultures for early problem signs</li>
					<li>Keep detailed records of all procedures</li>
				</ul>
			</div>
			
			<div class="prevention-category">
				<h4>Weekly Reviews</h4>
				<ul>
					<li>Assess overall culture health and progress</li>
					<li>Check equipment calibration and function</li>
					<li>Update protocols based on observations</li>
					<li>Plan preventive maintenance activities</li>
				</ul>
			</div>
			
			<div class="prevention-category">
				<h4>Monthly Evaluations</h4>
				<ul>
					<li>Analyze success rates and problem patterns</li>
					<li>Update chemical stocks and check expiration dates</li>
					<li>Review and refine standard operating procedures</li>
					<li>Plan improvements to facilities and protocols</li>
				</ul>
			</div>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Conclusion: Mastering the Art of Problem-Solving" columns={1}>
		<p>Successful tissue culture depends not just on following protocols, but on developing strong troubleshooting skills. Each problem you encounter and solve adds to your expertise and confidence.</p>
		
		<h4>Key Principles for Effective Troubleshooting:</h4>
		<ol>
			<li><strong>Stay Calm and Systematic:</strong> Panic leads to poor decisions and hasty changes</li>
			<li><strong>Document Everything:</strong> Good records are essential for identifying patterns</li>
			<li><strong>Change One Variable at a Time:</strong> This isolates the actual cause of problems</li>
			<li><strong>Learn from Failures:</strong> Each setback provides valuable learning opportunities</li>
			<li><strong>Build on Successes:</strong> Replicate conditions that produce good results</li>
		</ol>
		
		<p>By mastering these troubleshooting techniques, you'll develop the confidence and skills needed to handle any challenge your tissue culture work presents. Remember, every expert was once a beginner who refused to give up when faced with problems.</p>
		
		<p><strong>Your persistence in solving problems today builds the expertise for tomorrow's successes.</strong></p>
	</ContentBlock>
</ProtocolLayout>

<style>
	.problem-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 16px;
	}
	
	.problem-header h3 {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
	}
	
	.problem-badge {
		padding: 4px 12px;
		border-radius: 4px;
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.problem-badge.critical {
		background: #fee;
		color: #c33;
		border: 1px solid #c33;
	}
	
	.problem-badge.severe {
		background: #fff3cd;
		color: #856404;
		border: 1px solid #856404;
	}
	
	.problem-badge.moderate {
		background: #e7f3ff;
		color: #004085;
		border: 1px solid #004085;
	}
	
	.problem-badge.low {
		background: #e8f5e9;
		color: #2e7d32;
		border: 1px solid #2e7d32;
	}
	
	h4 {
		margin: 20px 0 12px 0;
		font-size: 16px;
		font-weight: 600;
	}
	
	.prevention-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin: 20px 0;
	}
	
	.prevention-category {
		padding: 16px;
		background: #f9f9f9;
		border: 1px solid #ddd;
		border-radius: 8px;
	}
	
	.prevention-category h4 {
		margin-top: 0;
		margin-bottom: 12px;
		font-size: 16px;
	}
	
	.prevention-category ul {
		margin: 0;
		padding-left: 20px;
		font-size: 14px;
	}
	
	/* Responsive */
	@media (max-width: 968px) {
		.prevention-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
