<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import StepItem from '$lib/components/StepItem.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';
	
	const protocolId = 'african-violet';
	
	const title = 'Saintpaulia ionantha<br>African Violet';
	const badges = [
		'Difficulty: ⭐ Beginner',
		'Success Rate: 80-90%',
		'Explant: Leaf Petiole'
	];
	const introColumns = [
		'African violets are the gold standard for beginner tissue culture. They respond excellently to standard protocols, have high success rates, and provide clear visual feedback on technique quality.',
		'The protocol leverages the natural regenerative capacity of Saintpaulia leaf tissue. Callus forms readily at the petiole base, followed by organized shoot development with minimal hormone requirements.',
		'This species demonstrates exceptional acclimatization characteristics. Rooted plantlets transfer easily to soil-based substrate with minimal shock or mortality, making it ideal for learning proper techniques.'
	];
	const source = '';
</script>

<svelte:head>
	<title>African Violet Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Why Start with African Violets?">
		<p>African violets are highly recommended for beginners because they:</p>
		<ul>
			<li><strong>High Success Rates:</strong> Respond excellently to standard protocols with 80-90% success</li>
			<li><strong>Clear Feedback:</strong> Visual indicators show technique quality immediately</li>
			<li><strong>Forgiving Nature:</strong> Tolerate minor protocol variations without failure</li>
			<li><strong>Fast Response:</strong> Shoots appear within 2-3 weeks, providing quick results</li>
			<li><strong>Easy Acclimatization:</strong> Transfer to soil with minimal shock or mortality</li>
		</ul>
	</ContentBlock>
	
	<ContentBlock title="Materials Needed">
		<ul>
			<li>Healthy, non-flowering African violet plant</li>
			<li>70% ethanol for pre-treatment</li>
			<li>15% bleach solution (0.75% sodium hypochlorite)</li>
			<li>Surfactant (1-2 drops liquid soap per {convertVolume(100, $unitSystem)} bleach solution)</li>
			<li>MS medium with appropriate hormones</li>
			<li>Sterile distilled water</li>
			<li>Sterile tools (forceps, scalpel)</li>
			<li>Still Air Box or laminar flow hood</li>
		</ul>
	</ContentBlock>
	
	<ContentBlock title="Step 1: Explant Selection & Preparation">
		<div class="two-column">
			<div>
				<p><strong>Choose Optimal Explants:</strong></p>
				<ul>
					<li>Select healthy, mature leaves with petioles attached</li>
					<li>Avoid flowering plants (reduces success rates)</li>
					<li>Use leaves from disease-free, vigorous plants</li>
					<li>Morning harvest provides best results</li>
				</ul>
			</div>
			<div>
				<p><strong>Initial Cleaning:</strong></p>
				<ul>
					<li>Rinse explants under running tap water</li>
					<li>Remove any visible debris or damaged tissue</li>
					<li>Pat gently dry with paper towels</li>
					<li>Prepare for surface sterilization immediately</li>
				</ul>
			</div>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Step 2: Surface Sterilization Protocol">
		<ol class="step-list">
			<StepItem {protocolId} stepId="step-2-1" stepNumber="Alcohol Pre-treatment">
				Immerse explants in 70% ethanol for <Timer duration={30} label="Alcohol Pre-treatment">30 seconds</Timer>. Agitate gently to ensure complete coverage. This breaks surface tension for better bleach penetration.
			</StepItem>
			<StepItem {protocolId} stepId="step-2-2" stepNumber="Primary Sterilization">
				Transfer to 15% bleach solution with surfactant. Duration: <Timer duration={900} label="Primary Sterilization">15 minutes</Timer>. Ensure complete submersion and agitate every 5 minutes for uniform treatment.
			</StepItem>
			<StepItem {protocolId} stepId="step-2-3" stepNumber="Sterile Rinses">
				Rinse 3 times minimum in sterile distilled water: First rinse <Timer duration={300} label="First Rinse">5 minutes</Timer>, second rinse <Timer duration={300} label="Second Rinse">5 minutes</Timer>, third rinse <Timer duration={600} label="Third Rinse">10 minutes</Timer>. Additional rinses if bleach odor persists.
			</StepItem>
		</ol>
	</ContentBlock>
	
	<ContentBlock title="Step 3: Culture Initiation">
		<div class="two-column">
			<div>
				<p><strong>Explant Preparation:</strong></p>
				<ul>
					<li>Work within sterile environment (SAB or laminar flow)</li>
					<li>Cut petiole to 2-3 cm length using sterile scalpel</li>
					<li>Make fresh cuts on leaf base to expose meristematic tissue</li>
					<li>Handle gently to avoid tissue damage</li>
				</ul>
			</div>
			<div>
				<p><strong>Initiation Medium Formula:</strong></p>
				<ul>
					<li>MS basal medium</li>
					<li>Sucrose {convertWeight(30, $unitSystem)}/L</li>
					<li>BAP (cytokinin) 1.0 mg/L</li>
					<li>IAA (auxin) 0.1 mg/L</li>
					<li>Agar {convertWeight(8, $unitSystem)}/L</li>
					<li>{displayPH(5.6)}-{displayPH(5.8)}</li>
				</ul>
			</div>
		</div>
		<p><strong>Culture Conditions:</strong> Temperature {convertTemp(22, $unitSystem)}-{convertTemp(25, $unitSystem)}, 16-hour photoperiod with moderate light intensity, sealed culture vessels to maintain high humidity.</p>
	</ContentBlock>
	
	<ContentBlock title="Step 4: Multiplication Phase (4-6 weeks)">
		<div class="two-column">
			<div>
				<p><strong>Growth Monitoring:</strong></p>
				<ul>
					<li>Shoots typically appear after 2-3 weeks</li>
					<li>Multiple shoots develop from petiole base</li>
					<li>Healthy shoots show bright green coloration</li>
					<li>Watch for contamination signs daily</li>
				</ul>
			</div>
			<div>
				<p><strong>Subculturing Process:</strong></p>
				<ul>
					<li>Transfer to fresh multiplication medium every 4-6 weeks</li>
					<li>Carefully separate individual shoots</li>
					<li>Each shoot can be cultured as independent explant</li>
					<li>Maintain sterile technique during transfers</li>
				</ul>
			</div>
		</div>
	</ContentBlock>
	
	<ContentBlock title="Step 5: Rooting (2-4 weeks)">
		<p><strong>Natural Rooting:</strong> African violets often develop roots spontaneously on multiplication medium. If rooting occurs, proceed directly to acclimatization.</p>
		<p><strong>Dedicated Rooting Medium (if needed):</strong></p>
		<ul>
			<li>Half-strength MS medium ({convertWeight(2.22, $unitSystem)}/L)</li>
			<li>Sucrose {convertWeight(20, $unitSystem)}/L (reduced from multiplication)</li>
			<li>Hormone-free or very low hormone concentration</li>
			<li>Agar {convertWeight(8, $unitSystem)}/L</li>
			<li>{displayPH(5.6)}-{displayPH(5.8)}</li>
		</ul>
		<p>Transfer well-developed shoots to rooting medium. Roots typically develop within 2-4 weeks.</p>
	</ContentBlock>
	
	<ContentBlock title="Step 6: Acclimatization (2-3 weeks)">
		<ol class="step-list">
			<StepItem {protocolId} stepId="step-6-1" stepNumber="Root Cleaning">
				Gently remove all agar from roots under running water. Avoid damaging delicate root hairs. Pat dry gently with paper towel.
			</StepItem>
			<StepItem {protocolId} stepId="step-6-2" stepNumber="Transplanting">
				Use sterile potting mix (peat/perlite/vermiculite blend). Small pots (2-3 inches) for initial transplant. Plant at same depth as in culture.
			</StepItem>
			<StepItem {protocolId} stepId="step-6-3" stepNumber="Humidity Management">
				Cover with clear plastic bag or container. Maintain high humidity initially (90-95%). Gradually increase ventilation over 2-3 weeks. Monitor for wilting and adjust accordingly.
			</StepItem>
		</ol>
	</ContentBlock>
	
	<ContentBlock title="Success Indicators Timeline">
		<table>
			<thead>
				<tr>
					<th>Timeline</th>
					<th>Expected Results</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Week 1-2</strong></td>
					<td>No contamination present, explants remain green and healthy</td>
				</tr>
				<tr>
					<td><strong>Week 3-4</strong></td>
					<td>Shoot primordia visible at petiole base, small green bumps forming</td>
				</tr>
				<tr>
					<td><strong>Week 5-8</strong></td>
					<td>Multiple shoots developing, bright green coloration, 1-2 cm height</td>
				</tr>
				<tr>
					<td><strong>Week 9-12</strong></td>
					<td>Rooted plantlets ready for acclimatization, well-developed root systems</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>
	
	<ContentBlock title="Troubleshooting Common Problems">
		<table>
			<thead>
				<tr>
					<th>Problem</th>
					<th>Solution</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>No Shoot Formation</strong></td>
					<td>Increase BAP concentration to 1.5-2.0 mg/L. Ensure fresh medium and proper light conditions. Check explant quality.</td>
				</tr>
				<tr>
					<td><strong>Excessive Callus</strong></td>
					<td>Reduce IAA concentration or increase BAP ratio. Transfer to fresh medium with adjusted hormones.</td>
				</tr>
				<tr>
					<td><strong>Poor Rooting</strong></td>
					<td>Try IBA at 0.5-1.0 mg/L in rooting medium. Ensure shoots are well-developed before transfer. Check temperature and light.</td>
				</tr>
				<tr>
					<td><strong>Acclimatization Loss</strong></td>
					<td>Maintain higher humidity longer (95%+ initially). Gradual reduction over 3-4 weeks. Ensure proper root development before transfer.</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>
	
	<ContentBlock title="Key Success Factors" columns={2}>
		<div>
			<p><strong>Critical Success Points:</strong></p>
			<ul>
				<li>Use healthy, non-flowering donor plants</li>
				<li>Maintain strict sterile technique throughout</li>
				<li>Monitor cultures daily for contamination</li>
				<li>Provide consistent environmental conditions</li>
				<li>Be patient—shoots take 2-3 weeks to appear</li>
			</ul>
		</div>
		<div>
			<p><strong>Why This Protocol Works:</strong></p>
			<ul>
				<li>Balanced hormone ratios promote organized development</li>
				<li>Proper sterilization ensures clean cultures</li>
				<li>Gradual acclimatization prevents shock</li>
				<li>Species-specific conditions optimize growth</li>
				<li>Clear timeline helps track progress</li>
			</ul>
		</div>
	</ContentBlock>
</ProtocolLayout>

<style>
	:global(.step-list) {
		list-style: none;
		padding: 0;
	}
</style>
