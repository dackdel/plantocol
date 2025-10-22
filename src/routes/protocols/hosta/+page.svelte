<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import StepItem from '$lib/components/StepItem.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertWeight, displayPH } from '$lib/utils/unitConversions';
	
	const protocolId = 'hosta';
	
	const title = 'Hosta Species<br>Intermediate Protocol';
	const badges = [
		'Difficulty: ⭐⭐ Intermediate',
		'Success Rate: 75-85%',
		'Explant: Crown Tissue / Young Leaves'
	];
	const introColumns = [
		'Hostas maintain their distinctive variegation patterns through tissue culture, making them valuable for ornamental production. They require slightly more precision than African violets but still offer good success rates.',
		'This protocol is particularly effective for propagating rare and expensive Hosta cultivars. The tissue culture method preserves exact variegation patterns and allows rapid multiplication of superior varieties.',
		'Success with Hostas requires attention to timing, proper sterilization, and cooler growing conditions compared to other species. Mastering this protocol prepares you for more challenging plant varieties.'
	];
	const source = '';
</script>

<svelte:head>
	<title>Hosta Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Why Hosta for Intermediate Practice?">
		<p>Hostas bridge the gap between beginner-friendly species like African violets and more challenging plants. They offer several unique advantages:</p>
		<ul>
			<li><strong>Variegation Retention:</strong> Distinctive leaf patterns remain stable through culture</li>
			<li><strong>High Value:</strong> Rare cultivars can be multiplied efficiently</li>
			<li><strong>Moderate Difficulty:</strong> Teaches precision without being overwhelming</li>
			<li><strong>Good Success Rates:</strong> 75-85% success with proper technique</li>
			<li><strong>Commercial Potential:</strong> Popular ornamental with strong market demand</li>
		</ul>
	</ContentBlock>
	
	<ContentBlock title="Materials Needed">
		<ul>
			<li>Dormant or early-growth Hosta plants</li>
			<li>70% ethanol for pre-treatment</li>
			<li>15% bleach solution (0.75% sodium hypochlorite)</li>
			<li>Surfactant (1-2 drops liquid soap per {convertWeight(100, $unitSystem)} bleach solution)</li>
			<li><Term abbr="MS" /> medium with modified hormones</li>
			<li>Sterile distilled water</li>
			<li>Sterile tools (forceps, scalpel)</li>
			<li><Term abbr="SAB" /> or laminar flow hood</li>
		</ul>
	</ContentBlock>
	
	<ContentBlock title="Step 1: Explant Selection and Timing" columns={2}>
		<div>
			<p><strong>Optimal Timing:</strong></p>
			<ul>
				<li>Early spring when shoots are 1-2 cm tall</li>
				<li>Dormant crown tissue works well</li>
				<li>Avoid summer collection (higher phenolic content)</li>
				<li>Morning collection provides best results</li>
			</ul>
		</div>
		<div>
			<p><strong><Term abbr="explant" /> Types:</strong></p>
			<ul>
				<li><strong>Primary:</strong> Central crown tissue (1-2 cm sections)</li>
				<li><strong>Alternative:</strong> Young leaf bases with <Term abbr="meristematic" /> tissue</li>
				<li><strong>Size:</strong> Keep explants small to ensure sterilization penetration</li>
				<li><strong>Quality:</strong> Use only healthy, vigorous tissue</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Step 2: Enhanced Sterilization Protocol">
		<p class="warning-box">⚠️ <strong>Important:</strong> Hostas can carry endophytes. Extended sterilization is necessary.</p>
		
		<ol class="step-list">
			<StepItem {protocolId} stepId="step-2-1" stepNumber="Pre-treatment">
				Remove outer leaves and debris. Cut away any damaged or discolored tissue. Rinse thoroughly under running water for 2-3 minutes.
			</StepItem>
			<StepItem {protocolId} stepId="step-2-2" stepNumber="Alcohol Treatment">
				Immerse explants in 70% ethanol for 15 seconds (shorter than African violet). This breaks surface tension without tissue damage.
			</StepItem>
			<StepItem {protocolId} stepId="step-2-3" stepNumber="Primary Sterilization">
				Transfer to 15% bleach solution with surfactant. Duration: 20 minutes (longer than African violet). Ensure complete submersion and agitate every 5 minutes.
			</StepItem>
			<StepItem {protocolId} stepId="step-2-4" stepNumber="Sterile Rinses">
				Rinse 3 times minimum in sterile distilled water: 5 minutes each rinse. Additional rinses if bleach odor persists.
			</StepItem>
		</ol>
	</ContentBlock>
	
	<ContentBlock title="Step 3: Culture Initiation" columns={3}>
		<div>
			<p><strong><Term abbr="explant" /> Preparation:</strong></p>
			<ul>
				<li>Work within sterile environment (<Term abbr="SAB" /> or laminar flow)</li>
				<li>Trim <Term abbr="explant" />s to 1-2 cm sections</li>
				<li>Remove any browning tissue edges</li>
				<li>Handle gently to avoid damage</li>
			</ul>
		</div>
		<div>
			<p><strong>Initiation Medium Formula:</strong></p>
			<ul>
				<li><Term abbr="MS" /> basal medium</li>
				<li>Sucrose {convertWeight(30, $unitSystem)}/L</li>
				<li><Term abbr="BAP" /> (<Term abbr="cytokinin" />) 2.0 mg/L (higher than African violet)</li>
				<li><Term abbr="NAA" /> (<Term abbr="auxin" />) 0.1 mg/L (more stable than <Term abbr="IAA" />)</li>
				<li>Agar {convertWeight(8, $unitSystem)}/L</li>
				<li><Term abbr="pH" /> {displayPH(5.7)}</li>
			</ul>
		</div>
		<div>
			<p><strong>Culture Conditions:</strong></p>
			<ul>
				<li>Temperature: {convertTemp(20, $unitSystem)}-{convertTemp(22, $unitSystem)} (cooler than African violet)</li>
				<li>16-hour photoperiod with moderate light intensity</li>
				<li>Monitor for browning (common in Hostas)</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Step 4: Multiplication Phase (4-5 weeks)" columns={3}>
		<div>
			<p><strong>Growth Monitoring:</strong></p>
			<ul>
				<li>Shoots typically appear after 3-4 weeks</li>
				<li>3-5 shoots per explant expected</li>
				<li>Healthy shoots show characteristic leaf variegation</li>
				<li>Watch for browning (add activated charcoal if needed)</li>
			</ul>
		</div>
		<div>
			<p><strong>Subculturing Process:</strong></p>
			<ul>
				<li>Transfer to fresh multiplication medium every 4-5 weeks (slightly longer than African violet)</li>
				<li>Carefully separate individual shoots</li>
				<li>Watch for vigor decline in later subcultures</li>
				<li>Reinitiate from fresh explants every 6-8 subcultures</li>
			</ul>
		</div>
		<div>
			<p><strong>Multiplication Medium Adjustment:</strong></p>
			<ul>
				<li>Maintain <Term abbr="BAP" /> at 2.0 mg/L for strong multiplication</li>
				<li>Consider reducing to 1.5 mg/L if excessive <Term abbr="callus" /> forms</li>
				<li><Term abbr="NAA" /> can be reduced to 0.05 mg/L in later subcultures</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Step 5: Rooting Protocol (2-4 weeks)" columns={2}>
		<div>
			<p><strong>Rooting Medium Formula:</strong></p>
			<ul>
				<li>Full-strength <Term abbr="MS" /> medium</li>
				<li>Sucrose {convertWeight(20, $unitSystem)}/L</li>
				<li><Term abbr="IBA" /> (<Term abbr="auxin" />) 1.0 mg/L (essential for Hosta rooting)</li>
				<li>No <Term abbr="cytokinin" /></li>
				<li>Agar {convertWeight(8, $unitSystem)}/L</li>
				<li><Term abbr="pH" /> {displayPH(5.7)}</li>
			</ul>
		</div>
		<div>
			<p><strong>Rooting Conditions:</strong></p>
			<ul>
				<li>Maintain cool temperatures ({convertTemp(20, $unitSystem)}-{convertTemp(22, $unitSystem)})</li>
				<li>Reduce light intensity during rooting</li>
				<li>Expect 2-4 weeks for root development</li>
				<li>Roots should be 2-3 cm long before transplanting</li>
			</ul>
			<p class="tip-box">💡 <strong>Tip:</strong> Hostas require <Term abbr="IBA" /> for reliable rooting. If roots don't develop, try pulse treatment (5 mg/L <Term abbr="IBA" /> for 48 hours).</p>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Step 6: Acclimatization (3-4 weeks)">
		<ol class="step-list">
			<StepItem {protocolId} stepId="step-6-1" stepNumber="Root Cleaning">
				Gently remove all agar from roots under running water. Avoid damaging delicate root hairs. Pat dry gently with paper towel.
			</StepItem>
			<StepItem {protocolId} stepId="step-6-2" stepNumber="Transplanting">
				Use well-draining, organic potting mix. Small pots (3-4 inches) for initial transplant. Plant at same depth as in culture.
			</StepItem>
			<StepItem {protocolId} stepId="step-6-3" stepNumber="Temperature Adjustment">
				Hostas prefer gradual temperature adjustment. Maintain cool conditions initially ({convertTemp(18, $unitSystem)}-{convertTemp(22, $unitSystem)}).
			</StepItem>
			<StepItem {protocolId} stepId="step-6-4" stepNumber="Gradual Hardening">
				<strong>Week 1:</strong> Full humidity, shade<br>
				<strong>Week 2:</strong> Partial ventilation, filtered light<br>
				<strong>Week 3:</strong> Normal conditions, monitor for stress<br>
				<strong>Week 4:</strong> Ready for outdoor conditions (if appropriate season)
			</StepItem>
		</ol>
	</ContentBlock>
	
	<ContentBlock title="Success Metrics and Timeline">
		<table>
			<thead>
				<tr>
					<th>Timeline</th>
					<th>Expected Results</th>
					<th>Success Indicators</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Week 1-2</strong></td>
					<td>No contamination, explants remain healthy</td>
					<td>Tissue stays green, no browning</td>
				</tr>
				<tr>
					<td><strong>Week 3-4</strong></td>
					<td>Shoot primordia visible</td>
					<td>Small green bumps at crown base</td>
				</tr>
				<tr>
					<td><strong>Week 5-8</strong></td>
					<td>Multiple shoots developing</td>
					<td>3-5 shoots per explant, variegation visible</td>
				</tr>
				<tr>
					<td><strong>Week 9-12</strong></td>
					<td>Shoots ready for rooting medium</td>
					<td>2-3 cm tall, healthy leaves</td>
				</tr>
				<tr>
					<td><strong>Week 13-16</strong></td>
					<td>Rooted plantlets ready for acclimatization</td>
					<td>2-3 cm roots, well-developed</td>
				</tr>
			</tbody>
		</table>
		
		<p><strong>Overall Success Metrics:</strong></p>
		<ul>
			<li><strong>Multiplication Rate:</strong> 3-5 shoots per explant every 4-5 weeks</li>
			<li><strong>Rooting Success:</strong> 80-90% of shoots develop adequate roots</li>
			<li><strong>Variegation Maintenance:</strong> Patterns remain stable through culture</li>
			<li><strong>Acclimatization:</strong> 85-95% survival with proper hardening</li>
		</ul>
	</ContentBlock>
	
	<ContentBlock title="Troubleshooting Hosta Culture">
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
					<td><strong>Browning of Explants</strong></td>
					<td>Phenolic oxidation</td>
					<td>Add activated charcoal (1 g/L) to medium. Reduce light exposure during initiation.</td>
				</tr>
				<tr>
					<td><strong>Poor Multiplication</strong></td>
					<td>Insufficient cytokinin</td>
					<td>Increase BAP to 2.5 mg/L. Ensure fresh medium and proper temperature.</td>
				</tr>
				<tr>
					<td><strong>Rooting Failure</strong></td>
					<td>Inadequate auxin</td>
					<td>Try pulse treatment (5 mg/L IBA for 48 hours) then transfer to hormone-free medium.</td>
				</tr>
				<tr>
					<td><strong>Variegation Loss</strong></td>
					<td>Temporary stress response</td>
					<td>Usually returns during acclimatization. Reduce subculture frequency.</td>
				</tr>
				<tr>
					<td><strong>Contamination</strong></td>
					<td>Endophytic bacteria/fungi</td>
					<td>Extend sterilization time to 25 minutes. Add PPM to medium if persistent.</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>
	
	<ContentBlock title="Key Success Factors" columns={2}>
		<div>
			<p><strong>Critical Differences from Beginner Species:</strong></p>
			<ul>
				<li>Cooler growing temperatures required</li>
				<li>Extended sterilization necessary</li>
				<li>Higher cytokinin concentrations needed</li>
				<li>IBA essential for rooting</li>
				<li>Timing of explant collection critical</li>
			</ul>
		</div>
		<div>
			<p><strong>Why This Protocol Works:</strong></p>
			<ul>
				<li>Species-optimized hormone ratios</li>
				<li>Temperature matches natural preferences</li>
				<li>Extended sterilization handles endophytes</li>
				<li>Gradual acclimatization prevents shock</li>
				<li>Consistent monitoring ensures quality</li>
			</ul>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Conclusion: Building Advanced Skills" columns={1}>
		<p>Successfully propagating Hostas through tissue culture demonstrates mastery of intermediate techniques. This protocol requires more precision than beginner species but provides valuable experience with:</p>
		
		<ul>
			<li><strong>Timing considerations</strong> for explant collection</li>
			<li><strong>Species-specific adjustments</strong> to standard protocols</li>
			<li><strong>Problem-solving skills</strong> for browning and contamination</li>
			<li><strong>Temperature management</strong> for cool-preferring species</li>
			<li><strong>Variegation stability</strong> monitoring through culture</li>
		</ul>
		
		<p>Mastering Hosta propagation prepares you for more challenging species and demonstrates your ability to adapt protocols to specific plant requirements. Each successful Hosta culture builds the expertise needed for advanced tissue culture work.</p>
		
		<p><strong>From intermediate success comes the confidence for advanced challenges.</strong></p>
	</ContentBlock>
</ProtocolLayout>

<style>
	:global(.step-list) {
		list-style: none;
		padding: 0;
	}
	
	.warning-box {
		padding: 12px 16px;
		background: #fff3cd;
		border: 1px solid #ffc107;
		border-radius: 6px;
		margin: 16px 0;
		font-size: 14px;
	}
	
	.tip-box {
		padding: 12px 16px;
		background: #e7f3ff;
		border: 1px solid #2196f3;
		border-radius: 6px;
		margin: 16px 0;
		font-size: 14px;
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
		table {
			font-size: 13px;
		}
		
		th, td {
			padding: 8px;
		}
	}
</style>
