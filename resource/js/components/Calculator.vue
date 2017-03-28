<template>
	<div class="calculator">
		<div class="welcome" v-if="currentStep === 0">
			<p>
				<strong>Please read.</strong> This calculator is intended to provide estimated net price information (defined as estimated cost of attendance — including tuition and required fees, books and supplies, room and board (meals), and other related expenses — minus estimated grant and scholarship aid) to current and prospective students and their families based on what similar students paid in a previous year.
			</p>
			<p>By clicking below, I acknowledge that the estimate provided using this calculator does not represent a final determination, or actual award, of financial assistance, or a final net price; it is an estimate based on cost of attendance and financial aid provided to students in a previous year. Cost of attendance and financial aid availability change year to year. The estimates shall not be binding on the Secretary of Education, the institution of higher education, or the State.</p>
			<p>Students must complete the Free Application for Federal Student Aid (FAFSA) in order to be eligible for, and receive, an actual financial aid award that includes Federal grant, loan, or work-study assistance. For more information on applying for Federal student aid, go to <a href="http://www.fafsa.ed.gov/">http://www.fafsa.ed.gov/</a>
			</p>
			<p>
				<strong>Note:</strong> Any information that you provide on this site is confidential. The Net Price Calculator does not store your responses or ask for personal identifying information of any kind.
			</p>
		</div>
		<div class="step-1" v-if="currentStep === 1">
			<h4>Step 1:</h4>
			<p>Please provide the requested information. Your responses will be used to calculate an estimated amount that students like you paid - after grant aid and scholarships but before student loans - to attend this institution in a given year.</p>
			<div class="columns">
				<div class="column col-8 centered">
					<form id="step1form" ref="step1" class="form-horizontal" v-on:submit.prevent="step1Submit">
						<div class="form-group">
							<div class="col-3">
								<label class="form-label" for="finAid"><strong>Financial Aid</strong></label>
							</div>
							<div class="col-9">
								<label class="form-label" for="finAid">Do you plan to apply for financial aid?</label>
								<label class="form-radio">
									<input type="radio" name="finAid" value="Yes" v-model="data.finAid" required/>
									<i class="form-icon"></i> Yes</label> <label class="form-radio">
								<input type="radio" name="finAid" value="No" v-model="data.finAid"/>
								<i class="form-icon"></i> No</label>
							</div>
						</div>
						<div class="form-group">
							<div class="col-3">
								<label class="form-label" for="age"><strong>Age</strong></label>
							</div>
							<div class="col-9">
								<label class="form-label" for="age">How old are you?</label>
								<input class="form-input" type="number" step="1" min="16" id="age" placeholder="e.g. 16" required v-model="data.age"/>
							</div>
						</div>
						<div class="text-center">
							<button class="btn btn-primary" type="button" @click="goTo(previousStep)">Go Back</button>
							<button class="btn btn-primary" type="submit">Continue</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="step-2" v-if="currentStep === 2">
			<form id="step2form" class="form-horizontal" ref="step2" v-on:submit.prevent="step2Submit">
				<h4>Step 2:</h4>
				<p>Please provide the following information and then click Continue.</p>
				<div class="form-group has-success">
					<div class="col-3">
						<label class="form-label"><strong>Marital Status</strong></label>
					</div>
					<div class="col-9">
						<label class="form-label">Are you (the student) married?</label>
						<label class="form-radio"><input type="radio" name="married" value="Yes" v-model="data.married"/>
							<i class="form-icon"></i> Yes</label> <label class="form-radio">
						<input type="radio" name="married" value="No" v-model="data.married"/><i class="form-icon"></i> No</label>
						<p class="form-input-hint">(Answer "yes" if you are separated but not divorced.)</p>
					</div>
				</div>
				<div class="form-group has-success">
					<div class="col-3">
						<label for="hasChildren" class="form-label"><strong>Children</strong></label>
					</div>
					<div class="col-9">
						<label class="form-label">Are you (the student) the primary source of financial support for any children?</label>
						<label class="form-radio"><input type="radio" name="hasChildren" value="Yes" v-model="data.hasChildren" required/>
							<i class="form-icon"></i> Yes</label> <label class="form-radio">
						<input type="radio" name="hasChildren" value="No" v-model="data.hasChildren"/><i class="form-icon"></i> No</label>
					</div>
				</div>
				<div class="text-center">
					<button class="btn btn-primary" type="button" @click="goTo(previousStep)">Go Back</button>
					<button class="btn btn-primary" type="submit">Continue</button>
				</div>
			</form>
		</div>
		<div class="step-3" v-if="currentStep === 3">
			<h4>Step 3</h4>
			<p>For the purposes of this calculator, an independent student is one who is at least 24 years old, married, and/or has legal dependents other than a spouse (e.g., children). A student who does not meet any of the above criteria is considered dependent.</p>
			<p>Based on the information you provided in previous steps, your dependency status is estimated to be <strong v-if="isDependent">Dependent</strong><strong v-else>Independent</strong>. Please provide the following information and then click Continue
			</p>
			<form class="form-horizontal" v-on:submit.prevent="step3Submit">
				<div>
					<div class="form-group">
						<div class="col-3">
							<label class="form-label" for="numberInFamily"><strong>Number in Family</strong></label>
						</div>
						<div class="col-9">
							<label for="numberInFamily" class="form-label">How many people are in your family's household? <br>
								<small v-if="isDependent">(Count yourself, your parent(s), and your parents' other dependent children.)</small>
								<small v-else>Count yourself, your spouse (if applicable) <span v-if="data.hasChildren === 'Yes'">, and any dependent children</span>.






								</small>
							</label>
							<!--Dependent-->
							<div v-if="isDependent">
								<label class="form-radio"><input type="radio" value="2" title="Two" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Two</label><br>
								<label class="form-radio"><input type="radio" value="3" title="Three" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Three</label><br>
								<label class="form-radio"><input type="radio" value="4" title="Four" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Four</label><br>
								<label class="form-radio"><input type="radio" value="5" title="Five" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Five</label><br>
								<label class="form-radio"><input type="radio" value="6" title="Six or more" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Six or more</label>
							</div>
							<!--Married no children-->
							<div v-else-if="data.hasChildren === 'No'">
								<label class="form-radio"><input type="radio" value="1" title="One" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> One</label><br>
								<label class="form-radio"><input type="radio" value="2" title="Two" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Two</label><br>
							</div>
							<div v-else>
								<label class="form-radio"><input type="radio" value="2" title="Two" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Two</label><br>
								<label class="form-radio"><input type="radio" value="3" title="Three" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Three</label><br>
								<label class="form-radio"><input type="radio" value="4" title="Four" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Four</label><br>
								<label class="form-radio"><input type="radio" value="5" title="Five" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Five</label><br>
								<label class="form-radio"><input type="radio" value="6" title="Six or more" v-model="data.numberInFamily"/>
									<i class="form-icon"></i> Six or more</label>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="col-3">
							<label for="numberInCollege" class="form-label"><strong>Number in College</strong></label>
						</div>
						<div class="col-9">
							<label for="numberInCollege" class="form-label">Of the number in your family above, how many will be in college next year?<br>
								<small v-if="isDependent">(Count yourself and your siblings; do not count your parents.)</small>
							</label>
							<!--Dependent-->
							<div v-if="isDependent">
								<label class="form-radio"><input type="radio" name="numberInCollege" id="numberInCollege1" value="1" v-model="data.numberInCollege"/>
									<i class="form-icon"></i> One child</label><br>
								<label class="form-radio"><input type="radio" name="numberInCollege" id="numberInCollege2" value="2" v-model="data.numberInCollege"/>
									<i class="form-icon"></i> Two children</label><br>
								<label class="form-radio"><input type="radio" name="numberInCollege" id="numberInCollege3" value="3" v-model="data.numberInCollege"/>
									<i class="form-icon"></i> Three or more children</label>
							</div>
							<!--Married no children-->
							<div v-else-if="data.hasChildren === 'No'">
								<label class="form-radio"><input type="radio" value="1" title="One" v-model="data.numberInCollege"/>
									<i class="form-icon"></i> One</label><br>
								<label class="form-radio"><input type="radio" value="2" title="Two" v-model="data.numberInCollege"/>
									<i class="form-icon"></i> Two</label><br>
							</div>
							<div v-else>
								<label class="form-radio"><input type="radio" value="1" title="One" v-model="data.numberInCollege"/>
									<i class="form-icon"></i> One</label><br>
								<label class="form-radio"><input type="radio" value="2" title="Two or More" v-model="data.numberInCollege"/>
									<i class="form-icon"></i> Two or more</label><br>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="col-3">
							<label for="householdIncome" class="form-label"><strong>Household Income</strong></label>
						</div>
						<div class="col-9">
							<label for="householdIncome" class="form-label">What is your annual household income after taxes?
							<br>
								<small v-if="isDependent">
									<ul>
										<li>Include income earned by yourself and your parent(s).</li>
										<li>Include income from work, child support, and other sources.</li>
										<li>If your parent is single, separated, or divorced, include the income for the parent with whom you live.</li>
										<li>If the parent with whom you live is remarried, include both your parent's income and his/her spouse's income.</li>
									</ul>
								</small>
								<small v-else>(Include income from work, child support, and other sources; if you are married, include your spouse's income.)</small>
							</label>
							<label class="form-radio"><input type="radio" name="householdIncome" value="0" v-model="data.householdIncome" title="Less than $30,000" required/>
								<i class="form-icon"></i> Less than $30,000</label><br/>
							<label class="form-radio"><input type="radio" name="householdIncome" value="1" v-model="data.householdIncome" title="Between $30,000 and $39,999"/>
								<i class="form-icon"></i> Between $30,000 - $39,999</label><br/>
							<label class="form-radio"><input type="radio" name="householdIncome" value="2" v-model="data.householdIncome" title="Between $40,000 and $49,999"/>
								<i class="form-icon"></i> Between $40,000 - $49,999</label><br/>
							<label class="form-radio"><input type="radio" name="householdIncome" value="3" v-model="data.householdIncome" title="Between $50,000 and $59,999"/>
								<i class="form-icon"></i> Between $50,000 - $59,999</label><br/>
							<label class="form-radio"><input type="radio" name="householdIncome" value="4" v-model="data.householdIncome" title="Between $60,000 and $69,999"/>
								<i class="form-icon"></i> Between $60,000 - $69,999</label><br/>
							<label class="form-radio"><input type="radio" name="householdIncome" value="5" v-model="data.householdIncome" title="Between $70,000 and $79,999"/>
								<i class="form-icon"></i> Between $70,000 - $79,999</label><br/>
							<label class="form-radio"><input type="radio" name="householdIncome" value="6" v-model="data.householdIncome" title="Between $80,000 and $89,999"/>
								<i class="form-icon"></i> Between $80,000 - $89,999</label><br/>
							<label class="form-radio"><input type="radio" name="householdIncome" value="7" v-model="data.householdIncome" title="Between $90,000 and $99,999"/>
								<i class="form-icon"></i> Between $90,000 - $99,999</label><br/>
							<label class="form-radio"><input type="radio" name="householdIncome" value="8" v-model="data.householdIncome" title="Above $99,999"/>
								<i class="form-icon"></i> Above $99,999</label><br/>
						</div>
					</div>
				</div>
				<br>
				<div class="text-center">
					<button class="btn btn-primary" type="button" @click="goTo(previousStep)">Go Back</button>
					<button class="btn btn-primary" type="submit">Continue</button>
				</div>
			</form>
		</div>
		<div class="confirm" v-if="currentStep === 'confirm'">
			<h4>Confirm Estimate</h4>
			<p>Review the information you have provided. You can click Modify to return to Step {{previousStep}} and edit this information, or if you are happy with the current selections, click <strong>Continue</strong> to receive your estimated net price.
			</p>
			<table class="table table-hover">
				<tbody>
				<tr>
					<td width="30%"><strong>Financial Aid</strong></td>
					<td>{{data.finAid}}</td>
				</tr>
				<tr>
					<td><strong>Age</strong></td>
					<td>{{data.age}}</td>
				</tr>
				<tr v-if="data.married">
					<td><strong>Marital Status</strong></td>
					<td>{{data.married}} <span v-if="data.married === 'Yes'">(Married)</span><span v-else>(Not Married)</span>
					</td>
				</tr>
				<tr v-if="data.hasChildren">
					<td><strong>Children</strong></td>
					<td>{{data.hasChildren}}</td>
				</tr>
				<tr v-if="data.numberInFamily">
					<td><strong>Number in Family</strong></td>
					<td>{{data.numberInFamily}}</td>
				</tr>
				<tr v-if="data.numberInCollege">
					<td><strong>Number in College</strong></td>
					<td>{{data.numberInCollege}}</td>
				</tr>
				<tr v-if="householdIncome">
					<td><strong>Household Income</strong></td>
					<td>{{householdIncome}}</td>
				</tr>
				</tbody>
			</table>
			<br>
			<div class="text-center">
				<button class="btn btn-primary" @click="goTo(previousStep)">Modify</button>
				<button class="btn btn-primary" @click="generateReport">Continue</button>
			</div>
		</div>
		<div class="result" v-if="currentStep === 'result'">
			<h4>Your estimates</h4>
			EFC: {{estimates.efc}}
			<div class="text-center">
				<button class="btn btn-primary" @click="goTo(1)">Start Over</button>
				<button class="btn btn-primary">Print</button>
			</div>
		</div>
		<div slot="panel-footer" class="text-center" v-if="currentStep === 0">
			<button class="btn btn-primary" @click="goTo(1)">I Agree</button>
		</div>
	</div>
</template>
<script>
    import EfcCalculator from '../EfcCalculator';
    let efcCalculator = new EfcCalculator();
    export default {
        name: 'calculator',
        components: {},
        data() {
            return {
                previousStep: 0,
                currentStep: 0,
                data: {
                    finAid: 'Yes',
                    married: null,
                    hasChildren: null,
                    numberInFamily: 0,
                    numberInCollege: 0,
                    householdIncome: null
                },
                estimates: {
                    efc: 0
                }
            }
        },
        computed: {
            isDependent(){
                if (this.data.age < 24) {
                    return (this.data.married === 'No' && this.data.hasChildren === 'No');
                }
                return false;
            },
            householdIncome(){
                if (!this.data.householdIncome) {
                    return null;
                }
                switch (this.data.householdIncome) {
                    case '0' :
                        return 'Less than $30,000';
                    case '1' :
                        return 'Between $30,000 - $39,999';
                    case '2' :
                        return 'Between $40,000 - $49,999';
                    case '3' :
                        return 'Between $50,000 - $59,999';
                    case '4' :
                        return 'Between $60,000 - $69,999';
                    case '5' :
                        return 'Between $70,000 - $79,999';
                    case '6' :
                        return 'Between $80,000 - $89,999';
                    case '7' :
                        return 'Between $90,000 - $99,999';
                    case '8' :
                        return 'Above $99,999';
                    default:
                        break;
                }
            },
        },
        beforeMount(){
        },
        mounted(){
        },
        methods: {
            goTo(step){
                if (_.isNumber(step)) {
                    this.previousStep = step - 1;
                } else {
                    this.previousStep = this.currentStep;
                }
                this.currentStep = step;
            },
            step1Submit(){
                if (this.data.finAid === 'No') {
                    this.goTo('confirm');
                    return;
                }
                this.goTo(2);
            },
            step2Submit(){
                this.goTo(3);
            },
            step3Submit(){
                if (this.isDependent && (this.data.numberInCollege >= this.data.numberInFamily)) {
                    alert("The Number in College must be less than the specified Number in Family.")
                }
                else if (this.data.numberInCollege > this.data.numberInFamily) {
                    alert("The Number in College must be less than or equal to the specified Number in Family.")
                }
                else {
                    this.goTo('confirm');
                }
            },
            generateReport(){
                let efc = 0;
                if (this.isDependent) {
                    efc = efcCalculator.calculateEfcDependent(this.data.numberInCollege,
                        this.data.numberInFamily,
                        this.data.householdIncome);
                } else {
                    if (this.data.hasChildren === 'Yes') {
                        efc = efcCalculator.calculateEfcIndWithChildren(this.data.numberInCollege,
                            this.data.numberInFamily,
                            this.data.householdIncome);
                    } else {
                        efc = efcCalculator.calculateEfcIndWithoutChildren(this.data.numberInCollege,
                            this.data.numberInFamily,
                            this.data.householdIncome);
                    }
                }
                this.estimates.efc = efc;
                console.log(this.data);
                this.goTo('result');
            }
        }
    }
</script>
<style>
	.calculator ul {
		list-style: disc;
	}
</style>