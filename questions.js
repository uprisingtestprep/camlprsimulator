const QUESTIONS = [
  {
    "domain": "clinical_chemistry",
    "chapter": 1,
    "question": "A technologist receives a lithium heparin tube and a lavender-top tube drawn from the same patient. The chemistry report on a serum sample from a third tube shows potassium 8.9 mmol/L, calcium 0.8 mmol/L, and alkaline phosphatase markedly below expected. The supernatant is clear and not hemolyzed. The patient has no symptoms and a normal ECG. What is the most likely explanation?",
    "options": {
      "A": "Contamination of the chemistry tube with potassium EDTA from an incorrect order of draw",
      "B": "Severe in vivo hemolysis from an unrecognized transfusion reaction several hours before the draw",
      "C": "True hyperkalemia with secondary hypocalcemia from acute kidney injury and extensive tissue breakdown",
      "D": "Pseudohyperkalemia caused by extreme thrombocytosis releasing potassium during clotting of the specimen"
    },
    "answer": "A",
    "explanation": "Potassium EDTA contamination gives the signature triad of very high potassium, very low calcium, and low alkaline phosphatase, because the chelator removes calcium and the zinc and magnesium needed by the enzyme, and a clear supernatant with a normal ECG fits it. Hemolysis from a transfusion reaction would colour the supernatant and would not remove calcium. True hyperkalemia with renal failure would produce ECG changes and would not lower alkaline phosphatase activity. Thrombocytosis raises potassium in serum but does not produce chelation of calcium, and the calcium would remain normal.",
    "id": 1
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 1,
    "question": "A 24-hour urine collection for creatinine clearance arrives with a total volume of 1.8 L. The collection instructions were to discard the first void at the start. The technologist notes the patient wrote that the first morning void was included in the container. The urine creatinine excretion is markedly higher than expected for the patient. How should the specimen be handled?",
    "options": {
      "A": "Report the result with a comment, since extra urine volume does not alter the calculation",
      "B": "Reject the collection and request a new one with clear written and verbal instructions",
      "C": "Subtract the estimated first-void creatinine from the total before calculating the clearance",
      "D": "Repeat the creatinine assay on a diluted aliquot to correct for the added volume"
    },
    "answer": "B",
    "explanation": "Including the first void makes the timed collection span more than twenty-four hours of urine production, so the total creatinine and volume no longer correspond to the stated interval, and a clearance calculated from it is invalid. Reporting with a comment still releases a number that clinicians may act upon. The first-void content cannot be estimated reliably, so subtraction is guesswork that adds a new error. Diluting the aliquot changes only the concentration in the tube and cannot restore the missing correspondence between the specimen and the collection period.",
    "id": 2
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 1,
    "question": "Which statement best explains why serum potassium is typically higher than plasma potassium collected into lithium heparin from the same patient at the same time?",
    "options": {
      "A": "Heparin binds potassium ions directly and removes a measurable portion of them from the plasma solution",
      "B": "Plasma contains fibrinogen that dilutes potassium concentration through increased protein volume effects",
      "C": "Platelets and other cells release potassium into the specimen during the clotting process in serum",
      "D": "Serum is centrifuged at a much higher speed, which forces additional potassium out of intact red cells"
    },
    "answer": "C",
    "explanation": "During clot formation, platelets and leukocytes release intracellular potassium, so serum shows a higher concentration, which can be several tenths of a mmol/L and more with high platelet counts. Heparin acts on antithrombin and does not bind potassium to a meaningful degree. Fibrinogen is present in plasma but at a concentration too small to dilute potassium measurably. Centrifuge speed does not lyse intact red cells to any relevant degree when the correct force is used.",
    "id": 3
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 1,
    "question": "A glucose result of 3.1 mmol/L is reported on an asymptomatic outpatient. The specimen was collected in a gel separator serum tube and arrived in the laboratory four hours after collection, without centrifugation. A repeat from a fresh fluoride tube gives 5.2 mmol/L. What is the best explanation for the discrepancy?",
    "options": {
      "A": "Continued glycolysis by the blood cells consumed glucose in the unseparated serum specimen",
      "B": "The gel barrier absorbed glucose from the specimen over the period of storage",
      "C": "A calibration error on the analyzer affected only the first tube tested that morning",
      "D": "Fluoride in the second tube raised the measured result through enzymatic interference"
    },
    "answer": "A",
    "explanation": "Red and white cells keep metabolizing glucose after collection, and in unseparated blood it falls by roughly five to seven percent each hour, so four hours can produce a substantial drop. Gel separator material is inert toward glucose and does not remove it from the specimen. A calibration problem would affect many patients on the run, and it would not produce a consistent difference between two tubes from one person. Fluoride inhibits enolase and prevents glycolysis, and it does not falsely increase the glucose reading.",
    "id": 4
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 1,
    "question": "A technologist must collect blood for a coagulation test, a serum chemistry panel, a complete blood count, and a glucose in a fluoride tube. Following the standard recommended order, which sequence should the phlebotomist use?",
    "options": {
      "A": "Lavender EDTA first, then light blue citrate, then gold serum, then grey fluoride oxalate last",
      "B": "Gold serum first, then lavender EDTA, then grey fluoride oxalate, then light blue citrate last",
      "C": "Light blue citrate first, then gold serum, then lavender EDTA, then grey fluoride oxalate last",
      "D": "Grey fluoride oxalate first, then gold serum, then light blue citrate, then lavender EDTA last"
    },
    "answer": "C",
    "explanation": "The recommended sequence places the citrate tube first among these, then serum tubes, then heparin if needed, then EDTA, and finally the fluoride and oxalate tube, which keeps each additive from contaminating the tube that follows it. Beginning with EDTA risks carrying a chelator into the citrate and serum tubes, giving false clotting results and wrong potassium and calcium values. Placing the fluoride tube early risks sodium and potassium carry-over into the later tubes. Putting the serum tube before the citrate tube allows clot activator to reach the coagulation specimen.",
    "id": 5
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 1,
    "question": "A patient receiving intravenous dextrose through the left forearm has blood drawn from the same arm. The results show glucose 38 mmol/L, sodium 128 mmol/L, potassium 2.4 mmol/L, and calcium 1.6 mmol/L. The patient appears clinically stable. What should the technologist do?",
    "options": {
      "A": "Report all results exactly as measured and flag the very high glucose as a critical value",
      "B": "Suppress only the glucose and report the electrolytes because they are within analytical range",
      "C": "Telephone the unit immediately to recommend starting insulin therapy based on the very high glucose result",
      "D": "Suspect infusion contamination, withhold the results, and request a recollection from the opposite arm"
    },
    "answer": "D",
    "explanation": "A very high glucose with dilution of electrolytes and calcium in a stable patient on dextrose indicates infusion contamination, and all analytes are compromised by the dilution, so none can be trusted. Reporting everything as measured could lead to inappropriate treatment, including a dangerous insulin dose. Keeping the electrolytes while removing the glucose ignores that they were diluted by the same fluid. Starting insulin on an artefactual glucose would put a stable patient at risk of harm.",
    "id": 6
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 1,
    "question": "A lipemic specimen from a patient with severe hypertriglyceridemia gives a sodium of 121 mmol/L on the main analyzer, which uses indirect ion-selective electrodes. The blood gas analyzer reports sodium 139 mmol/L on a whole blood specimen collected at the same time. The patient has no symptoms of hyponatremia. What best explains the difference?",
    "options": {
      "A": "The blood gas analyzer is out of calibration and is falsely overestimating the true sodium value",
      "B": "The patient has a true syndrome of inappropriate antidiuretic hormone secretion with water retention",
      "C": "Electrolyte exclusion by the lipid fraction caused falsely low sodium with the indirect method",
      "D": "Sodium binding to lipoproteins has lowered the free ion concentration in the serum specimen"
    },
    "answer": "C",
    "explanation": "In indirect methods the specimen is diluted before measurement, and a high lipid or protein fraction means less plasma water per volume, so sodium appears falsely low, while a direct electrode reads the water phase and gives the true value. An uncalibrated blood gas analyzer would not explain a result that matches the clinical picture. True SIADH would show a low sodium on both methods. Lipoproteins do not bind sodium in a way that would reduce measured concentration.",
    "id": 7
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 1,
    "question": "A laboratory verifies a manufacturer's reference interval for serum creatinine by testing twenty healthy adults from its own population. Four of the twenty results fall outside the stated interval. What is the most appropriate action?",
    "options": {
      "A": "Accept the interval, because four of twenty is within the expected chance variation",
      "B": "Reject the interval and adopt the observed range of the twenty subjects",
      "C": "Repeat the verification with another twenty subjects before deciding whether to accept it",
      "D": "Report results without any reference interval until a new one is calculated"
    },
    "answer": "C",
    "explanation": "Verification usually accepts the interval if no more than two of twenty fall outside it, and four is more than expected, so a second group of twenty is the standard next step before rejecting it. Accepting the interval as is would ignore the criterion and may lead to wrong flagging of results. Twenty subjects are too few to establish a new interval, which requires at least 120 per partition. Reporting without a reference interval removes the context required for interpretation and breaches accreditation expectations.",
    "id": 8
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 1,
    "question": "A neonatal heel-stick specimen in a lavender microtube is received filled to about one third of its stated capacity. The hemoglobin is lower than the infant's previous values and the hematocrit is low, but the MCV is unchanged. What is the most plausible reason?",
    "options": {
      "A": "Excess EDTA relative to the small blood volume has shrunk the red cells and diluted the specimen",
      "B": "The infant has developed iatrogenic anemia from repeated blood sampling over the course of the last week",
      "C": "The analyzer has failed to detect red cells because of insufficient specimen aspiration from the microtube",
      "D": "Dilution by tissue fluid from squeezing the heel has lowered the red cell count and hemoglobin"
    },
    "answer": "D",
    "explanation": "Squeezing the heel brings tissue fluid into the specimen, which dilutes the blood and lowers hemoglobin and hematocrit while leaving cell size, the MCV, unchanged because the cells themselves are unaltered. Excess EDTA characteristically shrinks red cells and lowers the MCV, which is not seen here. A true anemia from repeated sampling would not be certain without confirming collection technique, and it would fit a gradual change rather than a sudden drop. An aspiration failure would produce an instrument error flag rather than a plausible but low set of values.",
    "id": 9
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 2,
    "question": "A control serum for sodium has a mean of 140 mmol/L and an SD of 2 mmol/L. During one run, the low-level control reads 145 mmol/L and the high-level control reads 135 mmol/L. Neither value alone exceeds three SD. Which Westgard rule is violated, and what error type does it suggest?",
    "options": {
      "A": "The 2-2s rule, which suggests a systematic error affecting only one control level within the run",
      "B": "The R-4s rule, which suggests random error producing a wide spread between the two levels",
      "C": "The 4-1s rule, which suggests a gradual drift of the calibration across several days of testing",
      "D": "The 10-x rule, which suggests a consistent bias on one side of the mean over many runs"
    },
    "answer": "B",
    "explanation": "One control exceeds two SD above the mean and the other exceeds two SD below, so the range between them is more than four SD within one run, which is the R-4s pattern and points to random error. The 2-2s rule requires two controls beyond the same side of the mean, which is not the case when the results fall on opposite sides. The 4-1s rule needs four consecutive observations beyond one SD on one side. The 10-x rule needs ten consecutive controls on one side, which cannot be assessed from a single run.",
    "id": 10
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 2,
    "question": "A patient specimen produces an absorbance of 1.04 for an endpoint glucose assay, above the highest calibrator at 0.90 that corresponds to 25 mmol/L. The linearity limit of the method is stated as 25 mmol/L. The technologist makes a 1 in 2 dilution with the manufacturer's diluent, and the dilution reads 14.4 mmol/L. What should be reported?",
    "options": {
      "A": "14.4 mmol/L, since the diluted result is within range and has been verified",
      "B": "28.8 mmol/L, after multiplying by the dilution factor of two",
      "C": "25 mmol/L, since the method does not report above the highest calibrator",
      "D": "7.2 mmol/L, after dividing the diluted result by the dilution factor"
    },
    "answer": "B",
    "explanation": "The diluted result must be multiplied by the dilution factor to give the concentration in the original specimen, so 14.4 times 2 equals 28.8 mmol/L. Reporting the diluted value would grossly underestimate a clinically important hyperglycemia. Reporting the upper limit would hide a validated extended value that the laboratory can produce by dilution. Dividing by the factor moves in the wrong direction and gives a value that is lower than the diluted reading.",
    "id": 11
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 2,
    "question": "A one-step sandwich immunoassay for prolactin returns a result of 40 ug/L in a patient with a large pituitary mass on imaging and amenorrhea. The clinician suspects a much higher value. Which action by the technologist is most appropriate?",
    "options": {
      "A": "Repeat the specimen at a serial dilution to exclude the high-dose hook effect",
      "B": "Report the result because immunoassays have a wide linear range in all circumstances",
      "C": "Treat the specimen with a heterophile blocking agent to reduce a false positive",
      "D": "Recalibrate the assay because the curve was probably flat at low concentrations"
    },
    "answer": "A",
    "explanation": "A large prolactin-secreting tumour can saturate both antibodies separately in a one-step sandwich assay, so the signal falls and the result is falsely low; dilution restores the sandwich and reveals the true concentration. A wide linear range does not protect against the hook effect, which happens beyond the range. Heterophile blocking addresses a falsely high signal, which is the opposite problem. Recalibration at low concentrations would not correct an error occurring at an extreme high concentration.",
    "id": 12
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 2,
    "question": "A laboratory introduces a new cholesterol method. In comparison with the current method on 40 patient specimens, the new method shows a slope of 1.00 and an intercept of 0.45 mmol/L, with a correlation coefficient of 0.998. Which conclusion is best supported?",
    "options": {
      "A": "The methods agree completely, because the correlation coefficient is very close to one in value",
      "B": "The methods disagree in proportion to concentration, because the slope is exactly equal to one",
      "C": "There is a constant positive bias in the new method despite high correlation",
      "D": "The new method has poor precision, because the regression intercept differs from zero by a small amount"
    },
    "answer": "C",
    "explanation": "A slope of 1.00 with a nonzero intercept means the new method reads about 0.45 mmol/L higher at every concentration, a constant systematic error that a correlation coefficient cannot reveal. High correlation measures how closely the points follow a line, not whether the line is the line of identity. A slope equal to one shows no proportional error, so describing a proportional disagreement is incorrect. Precision is measured by replicate variation and is unrelated to the position of the regression intercept.",
    "id": 13
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 2,
    "question": "Serum from a patient with severe hypertriglyceridemia gives a sodium of 124 mmol/L on an analyzer using indirect ISE, while a direct ISE blood gas analyzer reports 140 mmol/L. Ultracentrifugation of the serum and repeat measurement gives 139 mmol/L. Which mechanism explains the initial low value?",
    "options": {
      "A": "Lipoproteins bind sodium and decrease the amount of free ion available to the electrode",
      "B": "The high lipid content causes the analyzer to apply an incorrect calibration slope to this sample",
      "C": "Triglycerides dissolve the electrode membrane and thereby lower the voltage generated by the sodium ions",
      "D": "A reduction in the plasma water fraction means the diluted sample contains less sodium than assumed"
    },
    "answer": "D",
    "explanation": "The indirect method dilutes a fixed volume of specimen and assumes a normal water fraction, and when lipid occupies a large part of the volume, the specimen contains less water and therefore less sodium per unit volume, giving a falsely low reading. Lipoproteins do not bind sodium enough to matter. Triglycerides do not dissolve the glass membrane. Slope is established by calibrators and is not changed by the specimen being tested.",
    "id": 14
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 2,
    "question": "A technologist is evaluating serum protein electrophoresis on a patient. There is a sharp band in the beta-gamma region on a plasma specimen, but the corresponding serum specimen collected the same day shows no discrete band. Immunofixation on the serum shows no monoclonal protein. What is the most likely identity of the band in the plasma?",
    "options": {
      "A": "An IgA monoclonal protein that precipitated during clotting in the serum specimen",
      "B": "Free kappa light chain that was removed by the clotting process",
      "C": "Fibrinogen, which is present in plasma and migrates in the beta-gamma region",
      "D": "A hemoglobin-haptoglobin complex produced by in vivo hemolysis"
    },
    "answer": "C",
    "explanation": "Plasma contains fibrinogen, which forms a band between the beta and gamma regions and can mimic a paraprotein, which is the reason serum, not plasma, is required for protein electrophoresis. A monoclonal immunoglobulin would remain in the serum and show on immunofixation, which was negative. Free light chains are not selectively removed by clotting. A hemoglobin-haptoglobin complex migrates in the alpha-2 region and would appear in both specimen types if it were present in vivo.",
    "id": 15
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 2,
    "question": "A laboratory has a glucose method with an allowable total error of 7 percent, a bias of 1 percent, and a CV of 1.5 percent. What is the sigma metric, and what does it imply for QC design?",
    "options": {
      "A": "Sigma of 4.0, which supports using a multirule scheme with moderately frequent controls",
      "B": "Sigma of 6.0, which supports a simple single-rule scheme with infrequent controls",
      "C": "Sigma of 8.0, which means QC could reasonably be discontinued for this method",
      "D": "Sigma of 2.0, which means the method is unacceptable and must be replaced"
    },
    "answer": "A",
    "explanation": "Sigma equals the allowable error minus bias, divided by CV, so (7 minus 1) divided by 1.5 gives 4.0, a good but not world-class method that benefits from multirule QC at a reasonable frequency. A sigma of 6 would need the bias to be smaller or the CV lower, so the stated arithmetic does not support it. No sigma value justifies discontinuing quality control altogether. A sigma of 2 would need a much larger bias or imprecision than the numbers given.",
    "id": 16
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 2,
    "question": "Two consecutive high-level and low-level control results on a chemistry analyzer are both between two and three SD above the mean, following a change to a new reagent lot. Patient results from the preceding run have already been released. Which course of action is best?",
    "options": {
      "A": "Accept the run because neither control exceeds three SD and the 1-3s rule is not broken",
      "B": "Repeat the controls until one value falls within limits, then continue patient testing",
      "C": "Hold results, investigate the lot change and calibration, and review released patient results",
      "D": "Replace the control material with a new lot and resume testing without further review"
    },
    "answer": "C",
    "explanation": "Both controls above the same two SD limit breach the 2-2s rule, which signals systematic error that likely relates to the lot change or calibration, so the run is rejected and the cause investigated, including a review of results already released. The 1-3s rule is only one of several rules, and passing it does not make the run acceptable. Repeating controls until one passes hides the underlying shift. Changing the control material before establishing the cause does not address a possible reagent problem.",
    "id": 17
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 2,
    "question": "A urine drug screen by immunoassay is positive for amphetamines in a patient who takes a cold remedy and an antibiotic. The result will be used in a workplace decision. What should the laboratory do before reporting it as confirmed?",
    "options": {
      "A": "Report the immunoassay result as final because the assay is validated for amphetamines",
      "B": "Repeat the same immunoassay on a fresh aliquot to confirm the positive",
      "C": "Dilute the specimen and repeat to see whether the signal decreases proportionally",
      "D": "Confirm by a different method such as GC-MS or LC-MS/MS before reporting"
    },
    "answer": "D",
    "explanation": "Immunoassay screens are presumptive, because antibodies cross-react with structurally similar compounds including some decongestants and antibiotics, so a result that carries legal or employment consequences must be confirmed by a method that identifies the exact compound by mass. Reporting the screening result as final ignores the false-positive potential. Repeating the same immunoassay would reproduce the same cross-reactivity. Dilution studies assess linearity and do not identify which molecule produced the signal.",
    "id": 18
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 3,
    "question": "A nonfasting patient has a total cholesterol of 6.2 mmol/L, an HDL cholesterol of 1.0 mmol/L, and a triglyceride of 2.2 mmol/L. Using the Friedewald equation in SI units, what is the calculated LDL cholesterol?",
    "options": {
      "A": "3.0 mmol/L, found by subtracting the triglyceride value directly rather than dividing it by 2.2",
      "B": "5.2 mmol/L, found by subtracting only the HDL cholesterol and omitting the VLDL estimate",
      "C": "4.2 mmol/L, found by subtracting HDL and the triglyceride divided by 2.2 from total cholesterol",
      "D": "2.2 mmol/L, found by repeating the triglyceride value as though it were the LDL result"
    },
    "answer": "C",
    "explanation": "The equation takes total cholesterol minus HDL cholesterol minus triglyceride divided by 2.2, so 6.2 minus 1.0 minus 1.0 equals 4.2 mmol/L. The value of 3.0 results from subtracting the triglyceride directly instead of dividing it by the factor. The value of 5.2 forgets to subtract the VLDL estimate entirely, and it equals non-HDL cholesterol. The value of 2.2 simply repeats the triglyceride and does not follow from any step in the calculation.",
    "id": 19
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 3,
    "question": "A 45-year-old woman has a fasting plasma glucose of 7.4 mmol/L and an A1c of 6.2 percent on the same blood sample. She has no symptoms. According to the diagnostic criteria, how should these results be interpreted?",
    "options": {
      "A": "Diabetes is excluded because the A1c is below the diagnostic threshold",
      "B": "Diabetes is not yet diagnosed and a second test should be done on another day",
      "C": "Diabetes is diagnosed on the fasting glucose alone, because it exceeds the threshold of 7.0 mmol/L",
      "D": "Prediabetes is diagnosed because the results fall within the intermediate range for both tests"
    },
    "answer": "B",
    "explanation": "In an asymptomatic person, a single abnormal result needs confirmation, and confirmation by two tests from the same sample counts only when both exceed their thresholds, which is not the case when the A1c is below 6.5 percent. The A1c does not exclude diabetes, because it is less sensitive than the glucose test, so a repeat test is needed. Diagnosis on a single abnormal fasting glucose without symptoms is not accepted. Prediabetes does not apply because the fasting glucose is already in the diabetic range.",
    "id": 20
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 3,
    "question": "A patient with known sickle cell trait has an A1c of 4.1 percent on an ion-exchange HPLC method, though home glucose records show averages near 9 mmol/L. Which is the most appropriate next step?",
    "options": {
      "A": "Accept the A1c, since an HPLC method is not affected by hemoglobin variants",
      "B": "Repeat the A1c on the same instrument to confirm the value is reproducible",
      "C": "Report the result as normal since the person does not have a hemoglobin disorder",
      "D": "Check the chromatogram for a variant peak and consider fructosamine as an alternative marker"
    },
    "answer": "D",
    "explanation": "A discrepancy between A1c and measured glucose in a patient with a known variant requires review of the chromatogram for variant peaks and a marker not dependent on hemoglobin, such as fructosamine or glycated albumin. HPLC can resolve many variants but not all, and results may be erroneous if a variant coelutes with A1c. Repeating on the same method would reproduce the same artifact. Sickle trait is a hemoglobin variant, so calling the person free of hemoglobin disorder is wrong.",
    "id": 21
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 3,
    "question": "In the evaluation of a patient with a raised ALP, the GGT is within the reference interval and the ALT is normal. Which source of the ALP elevation is the most likely?",
    "options": {
      "A": "Bone, such as from a healing fracture or Paget disease",
      "B": "Liver, due to bile duct obstruction by a stone",
      "C": "Placenta, because the patient is a woman of reproductive age",
      "D": "Intestine, because of recent ingestion of a fatty meal"
    },
    "answer": "A",
    "explanation": "GGT is elevated in hepatobiliary disease but not in bone disease, so a raised ALP with a normal GGT and normal ALT points to a bone source. Biliary obstruction would raise both ALP and GGT. Placental ALP would be relevant only if pregnancy were established, and age alone does not support it. Intestinal ALP can rise after a fatty meal in people with blood groups O and B who are secretors, but the increase is small and transient.",
    "id": 22
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 3,
    "question": "A 60-year-old man presents with chest pain 3 hours after onset. A high-sensitivity troponin I at presentation is 18 ng/L, below the 99th percentile of 34 ng/L. A repeat sample at 3 hours shows 96 ng/L. What is the most appropriate interpretation?",
    "options": {
      "A": "The result is negative and no further testing is required, since both values are comparatively low",
      "B": "The test is unreliable because the first value was below the threshold and the second was not",
      "C": "A significant rise indicates acute myocardial injury, and the change supports infarction when ischemia is present",
      "D": "The elevation indicates chronic kidney disease, because troponin is known to rise in renal failure"
    },
    "answer": "C",
    "explanation": "A rise from 18 to 96 ng/L is a large dynamic change with the second value above the 99th percentile, and in the setting of chest pain it meets the criteria for myocardial injury consistent with infarction. Calling both values low ignores that 96 ng/L exceeds the reference limit. A change between samples does not make the test unreliable and is exactly what serial testing is designed to detect. Chronic kidney disease causes a stable, mildly raised troponin, not a sharp rise within hours.",
    "id": 23
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 3,
    "question": "A 30-year-old man presents with dark urine after a marathon. Dipstick shows a strongly positive reaction for blood, but urine microscopy reveals no red cells. His serum creatine kinase is 48,000 U/L. Which explanation best fits these findings?",
    "options": {
      "A": "Hemoglobinuria from intravascular hemolysis caused by foot strike during running",
      "B": "Bilirubinuria from exertional liver injury releasing conjugated bilirubin into the urine",
      "C": "A urinary tract infection that has destroyed red cells before the specimen was collected",
      "D": "Myoglobinuria from skeletal muscle breakdown with a risk of acute kidney injury"
    },
    "answer": "D",
    "explanation": "Myoglobin contains heme and reacts on the dipstick without red cells being present, and a creatine kinase of this height signals rhabdomyolysis, which can injure the kidney. Foot-strike hemolysis does occur but would not account for a CK in the tens of thousands. Infection does not remove red cells and would show leukocytes and bacteria. Conjugated bilirubin gives dark urine, but it does not react as a heme on the blood pad of the dipstick.",
    "id": 24
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 3,
    "question": "A patient receiving a maltose-containing immune globulin infusion has a point-of-care glucose meter reading of 12.5 mmol/L, whereas a plasma glucose from the central laboratory by hexokinase is 3.1 mmol/L. Which statement explains the discrepancy?",
    "options": {
      "A": "The meter uses glucose dehydrogenase which reacts with maltose, causing a falsely high reading",
      "B": "The central laboratory sample was contaminated with fluoride, causing falsely low readings",
      "C": "The meter was calibrated for capillary blood and cannot be used on venous blood",
      "D": "Immune globulin binds glucose in the specimen and removes it from the reaction"
    },
    "answer": "A",
    "explanation": "Some glucose dehydrogenase strips cannot distinguish maltose from glucose, so the maltose in the infusion causes a falsely high meter reading and a risk that a hypoglycemic patient will be given insulin, while hexokinase is specific for glucose. Fluoride prevents glycolysis and does not lower glucose in the sample. Most meters accept venous specimens, and this would not explain a discrepancy of this size. Immune globulin does not bind glucose.",
    "id": 25
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 3,
    "question": "A specimen arrives from a patient with severe abdominal pain, and the serum amylase is three times the upper limit of normal. Lipase is within the reference interval, and the urine amylase is low. What is the most likely explanation of the amylase elevation?",
    "options": {
      "A": "Acute pancreatitis in an early phase, with the lipase expected to rise several hours later",
      "B": "Macroamylasemia, in which amylase bound to immunoglobulin is poorly cleared by the kidney",
      "C": "Salivary gland inflammation from mumps, which commonly gives a low urine amylase result",
      "D": "Renal failure, which is usually accompanied by a high urine amylase and a raised lipase"
    },
    "answer": "B",
    "explanation": "Macroamylasemia produces a persistently high serum amylase with low urinary amylase because the complex is too large to be filtered, and there is no pancreatic disease, which fits the normal lipase. In early pancreatitis, lipase rises at about the same time as amylase and is the more sensitive marker. Mumps raises salivary amylase but the urine level would be high rather than low. Renal failure reduces amylase clearance, but it would raise lipase too.",
    "id": 26
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 3,
    "question": "A hospitalized patient has an albumin of 24 g/L and a total calcium of 1.95 mmol/L, with an ionized calcium that is within the reference interval. Which explanation is most appropriate?",
    "options": {
      "A": "Reduced protein binding lowers total calcium, and the physiologically active ionized fraction remains normal",
      "B": "The patient has true hypocalcemia and needs urgent intravenous replacement of calcium in hospital",
      "C": "The specimen was contaminated with EDTA, which has lowered the measured calcium concentration",
      "D": "The ionized calcium is falsely normal because of pH changes that occurred in the specimen"
    },
    "answer": "A",
    "explanation": "About 40 percent of total calcium is bound to albumin, so a low albumin lowers total calcium while the ionized fraction remains normal, and the patient does not need calcium replacement. A true hypocalcemia would show a low ionized calcium. EDTA contamination would lower the ionized calcium too, and would raise potassium. A pH shift can change ionized calcium, but the stem gives no support for that and it would be an unlikely coincidence.",
    "id": 27
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 4,
    "question": "A patient with a serum glucose of 33.6 mmol/L has a measured sodium of 126 mmol/L. Assuming that sodium falls 2.4 mmol/L for each 5.6 mmol/L rise in glucose above 5.6 mmol/L, what is the approximate corrected sodium?",
    "options": {
      "A": "About 138 mmol/L, a normal sodium once the effect of glucose is removed",
      "B": "About 126 mmol/L, which is unchanged because glucose does not influence the measured sodium",
      "C": "About 150 mmol/L, which indicates true hypernatremia once glucose has been corrected",
      "D": "About 132 mmol/L, which still represents a mild hyponatremia after allowing for the glucose"
    },
    "answer": "A",
    "explanation": "Glucose is 28 mmol/L above 5.6, which is five increments of 5.6, so the expected fall in sodium is 5 times 2.4, or 12 mmol/L, giving a corrected value of 138 mmol/L. Leaving the value unchanged ignores the osmotic water shift that glucose causes. A correction to 150 mmol/L would result from adding far too much, since each increment adds only 2.4. A value of 132 mmol/L would result from correcting for only half of the glucose excess.",
    "id": 28
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 4,
    "question": "A patient with vomiting has pH 7.50, PCO2 48 mmHg, bicarbonate 36 mmol/L, and a urinary chloride that is very low. Which interpretation is most appropriate?",
    "options": {
      "A": "Respiratory alkalosis with compensatory renal excretion of bicarbonate",
      "B": "Respiratory acidosis with metabolic compensation through renal retention of bicarbonate",
      "C": "High anion gap metabolic acidosis with partial respiratory compensation by hyperventilation",
      "D": "Chloride-responsive metabolic alkalosis with compensatory hypoventilation raising the carbon dioxide level"
    },
    "answer": "D",
    "explanation": "The alkalemia with raised bicarbonate identifies a primary metabolic alkalosis, and the raised PCO2 is the expected hypoventilatory compensation, while low urinary chloride after vomiting indicates a chloride-responsive form. Respiratory alkalosis would show a low PCO2 rather than a high one. Respiratory acidosis would produce acidemia, not a pH of 7.50. A high anion gap acidosis would show acidemia and a low bicarbonate, which are both absent here.",
    "id": 29
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 4,
    "question": "A woman has a total calcium of 3.05 mmol/L, a phosphate below the reference interval, and a PTH within the upper reference range. Her serum creatinine is normal. What is the most likely diagnosis?",
    "options": {
      "A": "Hypercalcemia of malignancy mediated by PTH-related peptide from a distant tumour",
      "B": "Primary hyperparathyroidism, with a PTH inappropriately normal for the high calcium",
      "C": "Vitamin D intoxication with suppression of parathyroid hormone secretion by high calcium",
      "D": "Secondary hyperparathyroidism due to chronic kidney disease with phosphate retention"
    },
    "answer": "B",
    "explanation": "In true hypercalcemia the parathyroid should be suppressed, so a PTH in the upper normal range is inappropriate and, with the low phosphate, identifies primary hyperparathyroidism. Malignancy-associated hypercalcemia suppresses PTH, and the measured value would be low. Vitamin D toxicity also suppresses PTH and tends to raise phosphate. Secondary hyperparathyroidism in kidney disease shows low or normal calcium, high phosphate, and a raised creatinine, which are not found here.",
    "id": 30
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 4,
    "question": "A 28-year-old man has had three days of severe watery diarrhea. Laboratory results show sodium 138 mmol/L, potassium 3.1 mmol/L, chloride 114 mmol/L, and bicarbonate 12 mmol/L, with arterial pH 7.28. How is the acid-base disorder best described?",
    "options": {
      "A": "High anion gap metabolic acidosis due to accumulation of lactate from hypoperfusion and shock",
      "B": "Respiratory acidosis with renal compensation that has lowered the plasma bicarbonate concentration",
      "C": "Normal anion gap metabolic acidosis caused by loss of bicarbonate in the stool",
      "D": "Metabolic alkalosis with hypochloremia caused by the loss of gastric acid through vomiting"
    },
    "answer": "C",
    "explanation": "The anion gap is 138 minus 114 minus 12, or 12 mmol/L, which is within the usual range, and the raised chloride with low bicarbonate and acidemia fits the loss of bicarbonate-rich intestinal fluid. A lactic acidosis would widen the gap. Respiratory acidosis would raise the carbon dioxide level, and renal compensation would increase rather than lower bicarbonate. Metabolic alkalosis would show alkalemia and a high bicarbonate, which is the reverse of the findings.",
    "id": 31
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 4,
    "question": "A patient presents 6 hours after a single large ingestion of acetaminophen. The serum acetaminophen concentration is above the treatment line on the nomogram at the corresponding time. What action is most appropriate?",
    "options": {
      "A": "Start N-acetylcysteine without delay and monitor aminotransferases and the INR",
      "B": "Wait until 24 hours after ingestion and repeat the level before deciding on treatment",
      "C": "Give activated charcoal only and repeat the level in 12 hours",
      "D": "Withhold treatment because the aminotransferases are not yet elevated at six hours"
    },
    "answer": "A",
    "explanation": "A level above the treatment line indicates a risk of hepatotoxicity, and N-acetylcysteine is most effective when started within about eight hours, so treatment should begin immediately while liver tests are followed. Waiting 24 hours would miss the window of maximum benefit. Charcoal may reduce absorption early but is not a substitute for the antidote at this stage. Normal aminotransferases at six hours are expected because liver injury develops later, and they must not be used to withhold treatment.",
    "id": 32
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 4,
    "question": "Pulse oximetry reads 98 percent in a patient found unconscious in a closed garage, but the patient is cherry-pink and the blood gas PO2 is normal. Which measurement is most useful to confirm the diagnosis?",
    "options": {
      "A": "Repeat of the PO2 using a venous specimen collected on ice",
      "B": "Measurement of methemoglobin by co-oximetry to look for oxidized iron",
      "C": "Measurement of lactate to determine the severity of tissue hypoxia",
      "D": "Co-oximetry measurement of carboxyhemoglobin on a whole blood specimen"
    },
    "answer": "D",
    "explanation": "Carbon monoxide binds hemoglobin with high affinity and pulse oximetry cannot distinguish carboxyhemoglobin from oxyhemoglobin, so a normal saturation and PO2 can coexist with severe poisoning, and only co-oximetry identifies it. A venous PO2 would not detect the problem. Methemoglobin gives chocolate-brown blood and a pulse oximeter reading near 85 percent. Lactate indicates hypoxia but does not identify its cause.",
    "id": 33
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 4,
    "question": "A patient who has taken lithium for years has a trough level drawn 12 hours after the last dose of 0.9 mmol/L. Two weeks later, after beginning an NSAID for arthritis, the level is 1.8 mmol/L and he has a coarse tremor. What best explains the change?",
    "options": {
      "A": "Reduced renal clearance of lithium produced by the NSAID, which raises the serum level",
      "B": "Increased absorption of lithium from the stomach and small intestine due to the NSAID",
      "C": "Displacement of lithium from albumin by the NSAID, increasing the free fraction in blood",
      "D": "Induction of hepatic enzymes by the NSAID, which slows the hepatic metabolism of lithium"
    },
    "answer": "A",
    "explanation": "Lithium is cleared almost entirely by the kidney, and NSAIDs reduce renal blood flow and lithium excretion, so levels rise and toxicity can follow. Lithium is a small ion that is fully absorbed and not influenced by gastric changes. It is not protein bound, so displacement cannot occur. Lithium is not metabolized by the liver at all, so enzyme induction is irrelevant.",
    "id": 34
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 4,
    "question": "A 40-year-old woman has a TSH of 0.01 mU/L, a free T4 elevated at 38 pmol/L, and positive TSH receptor antibodies. Which interpretation is supported?",
    "options": {
      "A": "Subclinical hypothyroidism from early autoimmune thyroid disease with a mildly raised TSH",
      "B": "Graves disease causing primary hyperthyroidism through stimulation of the TSH receptor",
      "C": "Central hyperthyroidism from a TSH-secreting pituitary adenoma with an inappropriately normal TSH",
      "D": "Nonthyroidal illness with transient suppression of TSH in a hospital patient with acute illness"
    },
    "answer": "B",
    "explanation": "A suppressed TSH with a high free T4 means primary hyperthyroidism, and positive TSH receptor antibodies point to Graves disease, in which antibodies stimulate the receptor. Subclinical hypothyroidism has an elevated TSH. A TSH-secreting adenoma gives a high or inappropriately normal TSH with a high free T4. Nonthyroidal illness does not produce a high free T4 with receptor antibodies.",
    "id": 35
  },
  {
    "domain": "clinical_chemistry",
    "chapter": 4,
    "question": "The morning cortisol after a 1 mg overnight dexamethasone dose is 180 nmol/L in a patient with weight gain and hypertension. A subsequent ACTH is low. Which is the most likely source?",
    "options": {
      "A": "A pituitary corticotroph adenoma producing excess ACTH that stimulates both adrenal glands",
      "B": "An ectopic ACTH-secreting tumour in the lung that drives excess adrenal cortisol output",
      "C": "Exogenous estrogen from a contraceptive raising cortisol-binding globulin and total cortisol",
      "D": "An adrenal tumour secreting cortisol autonomously, independent of any ACTH stimulation"
    },
    "answer": "D",
    "explanation": "Failure of suppression confirms cortisol excess, and a low ACTH shows that the pituitary is suppressed by the cortisol, so the excess comes from an adrenal source acting independently. A pituitary adenoma and an ectopic tumour both give normal or high ACTH. Estrogen raises total cortisol through binding protein, but the ACTH would be normal and the free cortisol unchanged, and the suppression test would not fail in the same manner.",
    "id": 36
  },
  {
    "domain": "hematology",
    "chapter": 5,
    "question": "A technologist reviews a CBC with a platelet count of 38 x10^9/L and a flag for platelet clumps. The smear shows large platelet aggregates at the feather edge. The patient is asymptomatic, and the count six months ago was normal. What is the most appropriate action?",
    "options": {
      "A": "Report the count as measured and advise the physician to start high-dose corticosteroids urgently",
      "B": "Add a comment suggesting immune thrombocytopenia and request a bone marrow aspiration",
      "C": "Dilute the specimen with saline and repeat the count on the same analyzer within the hour",
      "D": "Recollect in sodium citrate, analyze promptly, and correct for the 1.1 dilution factor"
    },
    "answer": "D",
    "explanation": "Clumps on the smear in a well patient with a previously normal count indicate EDTA-dependent clumping, and a citrate specimen avoids the artefact, with the 1.1 factor correcting for the liquid anticoagulant. Reporting a falsely low count could lead to unnecessary treatment. Suggesting a marrow aspiration for a probable artefact is not supported by the findings. Diluting with saline does not break the antibody-mediated clumps and repeating on the same specimen gives the same result.",
    "id": 37
  },
  {
    "domain": "hematology",
    "chapter": 5,
    "question": "A specimen has a hematocrit of 0.42 and a red cell count of 5.6 x10^12/L, and a hemoglobin of 128 g/L. What are the MCV and MCHC?",
    "options": {
      "A": "MCV 75 fL and MCHC 305 g/L, a microcytic specimen with a low-normal concentration",
      "B": "MCV 133 fL and MCHC 305 g/L, a macrocytic specimen with a low-normal concentration",
      "C": "MCV 75 fL and MCHC 229 g/L, a microcytic specimen with a markedly low concentration",
      "D": "MCV 133 fL and MCHC 229 g/L, a macrocytic specimen with a markedly low concentration"
    },
    "answer": "A",
    "explanation": "MCV equals 0.42 divided by 5.6, multiplied by 1000, which is 75 fL, and MCHC equals 128 divided by 0.42, or 305 g/L, indicating a microcytic specimen with a low-normal MCHC. The values of 133 fL result from dividing the red cell count by the hematocrit in the wrong order. The value of 229 g/L results from dividing hemoglobin by the red cell count read as a fraction instead of by the hematocrit, which gives a meaningless quantity.",
    "id": 38
  },
  {
    "domain": "hematology",
    "chapter": 5,
    "question": "A specimen has a red cell count of 2.0 x10^12/L, a hemoglobin of 100 g/L, a hematocrit of 0.20, and an MCHC of 500 g/L. The agglutinated red cells are seen on the film at room temperature. Which action is best?",
    "options": {
      "A": "Report the results and comment that the patient has severe spherocytosis",
      "B": "Dilute the specimen with saline at room temperature and repeat the count immediately",
      "C": "Warm the specimen at 37 degrees Celsius, mix, and reanalyze before reporting",
      "D": "Discard the specimen and report the hemoglobin only, withholding every index"
    },
    "answer": "C",
    "explanation": "An impossible MCHC with red cell agglutination points to a cold agglutinin, whose clumps are counted as single large cells, and warming the specimen dissociates them so that true counts are obtained. Spherocytosis can raise the MCHC modestly but cannot produce 500 g/L. Dilution at room temperature leaves the antibody binding in place. Withholding every index discards information when a simple warming step resolves the problem.",
    "id": 39
  },
  {
    "domain": "hematology",
    "chapter": 5,
    "question": "A patient has a reticulocyte count of 4.5 percent and a hematocrit of 0.27. Using a maturation factor of 2.0 for this hematocrit, what is the reticulocyte production index?",
    "options": {
      "A": "1.0, which would indicate a normal marrow response to the degree of anemia",
      "B": "1.35, which indicates an inadequate marrow response for the degree of anemia",
      "C": "2.25, which would indicate a hyperproliferative marrow response to the anemia",
      "D": "4.5, which simply repeats the uncorrected reticulocyte percentage that was reported"
    },
    "answer": "B",
    "explanation": "The corrected count is 4.5 times 0.27 divided by 0.45, which is 2.7 percent, and dividing by the maturation factor of 2.0 gives an RPI of 1.35, below the threshold of 2 and therefore a response that is inadequate for the degree of anemia. A value of 1.0 would require a different count. A value of 2.25 results from forgetting to correct for the hematocrit. A value of 4.5 simply repeats the uncorrected count.",
    "id": 40
  },
  {
    "domain": "hematology",
    "chapter": 5,
    "question": "A newborn has a white count of 24.0 x10^9/L reported by the analyzer, and the smear shows 60 nucleated red cells per 100 white cells. What is the corrected white count?",
    "options": {
      "A": "14.4 x10^9/L, obtained by multiplying the reported count by the nucleated cell proportion",
      "B": "40.0 x10^9/L, obtained by dividing the reported count by the nucleated cell proportion",
      "C": "38.4 x10^9/L, obtained by multiplying the reported count by one plus the nucleated cell ratio",
      "D": "15.0 x10^9/L, obtained by dividing the reported count by one plus the nucleated cell ratio"
    },
    "answer": "D",
    "explanation": "The corrected count is the reported count multiplied by 100 and divided by 160, which is 24.0 times 100 divided by 160, or 15.0 x10^9/L. The value of 14.4 would result from multiplying by 60 percent, which subtracts too much. The values of 38.4 and 40.0 result from adding the nucleated cell proportion instead of removing it, which makes the white count larger rather than smaller.",
    "id": 41
  },
  {
    "domain": "hematology",
    "chapter": 5,
    "question": "The hemoglobin on a lipemic specimen reads 168 g/L, while the hematocrit is 0.38 and the red cell count is 4.2 x10^12/L, giving an MCHC of 442 g/L. What is the best way to obtain an accurate hemoglobin?",
    "options": {
      "A": "Replace the plasma with saline after centrifugation and reanalyze the specimen",
      "B": "Add extra lysing reagent so that the lipid is dissolved before the hemoglobin is read",
      "C": "Report the red cell count and hematocrit and omit the hemoglobin and indices",
      "D": "Multiply the measured hemoglobin by the ratio of hematocrit to red cell count"
    },
    "answer": "A",
    "explanation": "Lipemic plasma scatters light and falsely raises the hemoglobin reading, so the standard approach is to replace the plasma with diluent, which removes the turbidity, and then reanalyze, or use a plasma blank. Adding more lysing reagent does not clear lipid turbidity. Omitting the hemoglobin leaves an important result unreported when a correction exists. The proposed ratio has no valid rationale and would simply create a further error.",
    "id": 42
  },
  {
    "domain": "hematology",
    "chapter": 5,
    "question": "A blood film stained with Wright-Giemsa appears markedly blue, with eosinophil granules staining gray-blue and red cells staining greenish-blue. Which is the most likely cause?",
    "options": {
      "A": "Stain buffer or rinse water that is too acidic",
      "B": "Stain buffer or rinse water that is too alkaline",
      "C": "A film that was left unfixed in methanol for too long",
      "D": "A staining time that was too short for the stain concentration"
    },
    "answer": "B",
    "explanation": "An alkaline pH increases the binding of the basic dye so that cells look blue or green, and eosinophil granules lose their orange-red color, so the buffer pH must be checked and brought to about 6.8. An acidic buffer produces the opposite pattern, with pink red cells and pale nuclei. Overlong methanol fixation does not by itself alter color balance this way. A short stain time gives a pale smear but not specifically a blue one.",
    "id": 43
  },
  {
    "domain": "hematology",
    "chapter": 5,
    "question": "A moving average of MCV from consecutive patient samples has drifted upward by 3 fL over two days, while commercial controls remain within limits. Patient demographics have not changed. What is the most appropriate next step?",
    "options": {
      "A": "Investigate for a calibration or reagent shift and compare fresh patient samples across analyzers",
      "B": "Ignore the change since all commercial controls are in range and the drift appears quite small",
      "C": "Recalibrate immediately without further investigation, since the moving average is always correct",
      "D": "Remove the patient-based control from use because it disagrees with the commercial control material"
    },
    "answer": "A",
    "explanation": "A sustained shift in the patient average with stable demographics suggests an analytical change, and commercial controls can miss it since they differ from fresh blood, so the cause is investigated and the analyzer compared with a reference. Ignoring it risks releasing biased results for days. Recalibrating without investigation can mask a developing fault. Removing the moving average because it disagrees would discard the very tool that detected the problem.",
    "id": 44
  },
  {
    "domain": "hematology",
    "chapter": 5,
    "question": "The ESR is requested on a patient whose EDTA specimen was left at room temperature for 7 hours before testing. The tube was then placed in the rack slightly tilted. Which statement is correct?",
    "options": {
      "A": "The result will be unaffected, since the sedimentation rate is a stable property of the blood",
      "B": "The result will be falsely low because storage causes red cells to become more rigid",
      "C": "The result is unreliable because of delay and tilt, and a fresh specimen should be tested",
      "D": "The result will be falsely low because the delay allows plasma proteins to degrade"
    },
    "answer": "C",
    "explanation": "The Westergren method requires testing within four hours at room temperature and a truly vertical tube, and a tilt increases the apparent sedimentation rate, so a seven-hour specimen in a tilted tube should be rejected and a fresh one collected. The ESR is not a stable property of stored blood. Storage tends to alter red cell shape and so changes the result, but not in the direction claimed. Fibrinogen does not degrade appreciably over this period, so that claim is unsupported.",
    "id": 45
  },
  {
    "domain": "hematology",
    "chapter": 6,
    "question": "A 34-year-old woman has hemoglobin 92 g/L, MCV 68 fL, RBC 4.8 x10^12/L, and RDW 14.0 percent. Hemoglobin A2 is 5.1 percent on HPLC, and ferritin is 140 ug/L. Her partner is of Mediterranean ancestry. Which condition best explains these findings?",
    "options": {
      "A": "Iron deficiency anemia from chronic occult blood loss, with depleted stores and a high RDW",
      "B": "Alpha thalassemia trait from a two-gene deletion, which leaves the hemoglobin A2 level normal",
      "C": "Beta thalassemia trait with raised hemoglobin A2 and preserved iron stores",
      "D": "Anemia of inflammation with hepcidin-mediated iron sequestration and a normal hemoglobin A2 level"
    },
    "answer": "C",
    "explanation": "The raised hemoglobin A2, normal red cell count, and normal ferritin together identify beta thalassemia trait, in which beta chain output is reduced and delta chain output is relatively increased. Iron deficiency would show a low ferritin, a falling red cell count, and a wide RDW. Alpha thalassemia trait has a normal hemoglobin A2, so it would not explain the elevated value. Anemia of inflammation produces a normal or high ferritin but is not microcytic to this degree and does not raise hemoglobin A2.",
    "id": 46
  },
  {
    "domain": "hematology",
    "chapter": 6,
    "question": "A technologist calculates a corrected reticulocyte count for a patient with a hematocrit of 0.27 and a reticulocyte count of 6.0 percent. Using a normal hematocrit of 0.45, what is the corrected reticulocyte percentage?",
    "options": {
      "A": "3.6 percent, from the reticulocyte percentage multiplied by the hematocrit ratio",
      "B": "10.0 percent, from dividing the reticulocyte percentage by the patient to normal hematocrit ratio",
      "C": "27 percent, from using the hematocrit value itself as the corrected count",
      "D": "6.0 percent, because correction applies only to the absolute reticulocyte count and not the percentage"
    },
    "answer": "A",
    "explanation": "Correction multiplies the observed percentage by the ratio of the patient hematocrit to the normal hematocrit, giving 6.0 x 0.27/0.45 = 3.6 percent. Dividing by the ratio inflates the value and reverses the logic, because the anemia lowers the denominator and exaggerates the percentage. Dividing the hematocrit by the percentage is not a recognized formula and produces a meaningless number. Leaving the value uncorrected defeats the purpose, since the percentage overstates marrow output whenever the red cell mass is reduced.",
    "id": 47
  },
  {
    "domain": "hematology",
    "chapter": 6,
    "question": "A 70-year-old vegan man has an MCV of 118 fL, hypersegmented neutrophils, and a serum vitamin B12 at the lower borderline. Methylmalonic acid and homocysteine are both elevated. Which statement is the most accurate for this patient?",
    "options": {
      "A": "Folic acid alone should be started, because it corrects the blood count within one week",
      "B": "Elevated homocysteine with a normal methylmalonic acid would be expected in this deficiency state",
      "C": "The pattern excludes vitamin deficiency and points toward a primary marrow disorder such as aplasia",
      "D": "The raised methylmalonic acid confirms functional B12 deficiency despite a borderline serum level"
    },
    "answer": "D",
    "explanation": "Methylmalonyl-CoA mutase needs vitamin B12 only, so a raised methylmalonic acid together with raised homocysteine confirms tissue B12 deficiency even when the serum level is borderline. Giving folic acid alone can correct the anemia while leaving neurologic injury to progress, which makes it hazardous. Isolated homocysteine elevation with normal methylmalonic acid suggests folate deficiency rather than B12 deficiency. Hypersegmented neutrophils with macro-ovalocytes are characteristic of megaloblastic anemia and do not suggest primary marrow failure.",
    "id": 48
  },
  {
    "domain": "hematology",
    "chapter": 6,
    "question": "A child with fever develops dark urine, pallor, and jaundice after starting nitrofurantoin. Hemoglobin has fallen to 71 g/L, the DAT is negative, and the film shows bite cells and blister cells. A G6PD assay performed during the acute episode is reported as normal. What is the best next step?",
    "options": {
      "A": "Accept the normal result and exclude G6PD deficiency from the differential diagnosis for this child",
      "B": "Repeat the enzyme assay several weeks after recovery, once young reticulocytes have cleared",
      "C": "Order osmotic fragility testing to look for an underlying red cell membrane defect instead",
      "D": "Perform hemoglobin electrophoresis to rule out an unstable hemoglobin variant in this child"
    },
    "answer": "B",
    "explanation": "During an acute hemolytic episode the older, enzyme-deficient cells are destroyed and young reticulocytes with high enzyme activity dominate, so a normal level can be falsely reassuring. Repeating the assay after recovery avoids the trap. Accepting the normal result would miss a treatable cause and expose the child to further oxidant drugs. Osmotic fragility addresses spherocytosis, which does not produce bite cells or oxidant drug sensitivity. Electrophoresis would not detect an enzyme defect.",
    "id": 49
  },
  {
    "domain": "hematology",
    "chapter": 6,
    "question": "A blood film shows many red cells stacked like coins, a blue-tinged background, and a rapidly elevated ESR in a 68-year-old patient with bone pain. The analyzer reports a low platelet count and the film shows large platelet clumps. Which action is most appropriate before releasing the platelet count?",
    "options": {
      "A": "Recollect in sodium citrate, repeat the count, and correct the result for dilution",
      "B": "Release the analyzer count, because platelet clumps are expected in a high-protein specimen",
      "C": "Report the platelet count as zero and arrange an urgent bone marrow examination",
      "D": "Add a second aliquot of EDTA to the tube to disperse the platelet clumps in vitro"
    },
    "answer": "A",
    "explanation": "Platelet clumping in EDTA produces a spurious thrombocytopenia, and recollecting in citrate, then multiplying the result by the dilution factor (1.1 for a 9:1 mixture), gives a valid count. Releasing the analyzer value would label a patient thrombocytopenic when the platelet count may be normal. An estimate of zero is both incorrect and alarming. More EDTA will not disperse clumps and may worsen the artefact, since EDTA dependence is the cause of the clumping.",
    "id": 50
  },
  {
    "domain": "hematology",
    "chapter": 6,
    "question": "A 6-year-old has a hemoglobin of 105 g/L, MCHC 372 g/L, and many dense spherocytes. The DAT is negative, the reticulocyte count is 12 percent, and the father had a splenectomy. Which test is the most specific confirmatory procedure among those listed?",
    "options": {
      "A": "Hemoglobin electrophoresis at alkaline pH on cellulose acetate to look for a variant",
      "B": "Heinz body preparation with a crystal violet supravital stain after incubation with oxidants",
      "C": "Eosin-5-maleimide binding by flow cytometry showing reduced fluorescence of the red cells",
      "D": "Urinary hemosiderin staining after an episode of dark urine to document intravascular hemolysis"
    },
    "answer": "C",
    "explanation": "Reduced eosin-5-maleimide binding reflects deficiency of band 3 and associated membrane proteins and is a sensitive, specific confirmatory test for hereditary spherocytosis. Electrophoresis evaluates hemoglobin variants, which are not suspected from this film and history. Heinz bodies point to oxidant injury and G6PD deficiency, not to a membrane defect with a negative DAT. Hemosiderinuria documents intravascular hemolysis, which is not the mechanism here, since spherocytic cells are removed by the spleen.",
    "id": 51
  },
  {
    "domain": "hematology",
    "chapter": 6,
    "question": "A 3-year-old with pallor and a recent viral illness has a hemoglobin of 52 g/L, a corrected reticulocyte count of 0.2 percent, a normal white cell count and platelet count, and a known diagnosis of hereditary spherocytosis. The bone marrow shows giant pronormoblasts with intranuclear inclusions. Which agent is the most likely cause?",
    "options": {
      "A": "Epstein-Barr virus infection of the marrow stroma, with atypical lymphocytes on the film",
      "B": "Plasmodium falciparum invasion of circulating reticulocytes, with ring forms visible on the film",
      "C": "Cytomegalovirus infection of bone marrow macrophages, with generalized suppression of all three lineages",
      "D": "Parvovirus B19 infection of erythroid progenitors with arrest of red cell production"
    },
    "answer": "D",
    "explanation": "Parvovirus B19 infects erythroid progenitors and stops red cell production temporarily, which is dangerous when red cell survival is already short, as in hereditary spherocytosis, and giant pronormoblasts are the pathologic hallmark. Epstein-Barr virus causes lymphocytosis and atypical lymphocytes rather than selective erythroid arrest. Malaria destroys red cells directly and would raise the reticulocyte count, not suppress it. Cytomegalovirus can suppress the marrow generally but does not produce giant pronormoblasts with intranuclear inclusions limited to the red line.",
    "id": 52
  },
  {
    "domain": "hematology",
    "chapter": 6,
    "question": "A technologist reviewing a film from a patient on mechanical valve replacement sees helmet cells, triangular cells, and microspherocytes, a platelet count of 38 x10^9/L, and a negative DAT. Which course of action is the most appropriate?",
    "options": {
      "A": "Report the findings routinely with the next scheduled batch of results for the ward",
      "B": "Add a comment suggesting iron deficiency and request a serum ferritin level to confirm it",
      "C": "Telephone the clinician promptly, since these findings may signal an emergency",
      "D": "Repeat the film after refrigerating the specimen overnight to try to improve stain quality"
    },
    "answer": "C",
    "explanation": "Schistocytes with thrombocytopenia and a negative DAT suggest microangiopathic hemolysis, such as TTP, DIC, or mechanical shear, and some of these require urgent plasma exchange or other treatment, so same-day verbal notification is the safe practice. Routine batch reporting delays care. Iron deficiency does not generate fragmented cells and thrombocytopenia of this degree. Overnight refrigeration of the sample would create artefacts and further delay the call.",
    "id": 53
  },
  {
    "domain": "hematology",
    "chapter": 6,
    "question": "A laboratory reviews a patient with hemoglobin 108 g/L, MCV 79 fL, ferritin 210 ug/L, transferrin saturation 12 percent, low TIBC, and a high C-reactive protein. The patient has long-standing rheumatoid arthritis. Which mechanism best explains the iron pattern?",
    "options": {
      "A": "Interleukin-6 induction of hepcidin, which blocks ferroportin and traps iron in macrophages",
      "B": "Chronic gastrointestinal blood loss from long-term nonsteroidal anti-inflammatory drug use and depleted stores",
      "C": "Impaired globin chain synthesis from an inherited gene deletion affecting alpha or beta chains",
      "D": "Ineffective erythropoiesis from a combined deficiency of vitamin B12 and folate in the diet"
    },
    "answer": "A",
    "explanation": "Inflammation raises interleukin-6, which induces hepcidin, which in turn degrades ferroportin and traps iron in macrophages, producing low serum iron and low transferrin saturation with normal or high ferritin. Chronic blood loss would deplete stores and lower ferritin. A globin gene deletion would not alter iron transport indices or track with inflammation markers. Vitamin deficiency causes macrocytosis, not a borderline microcytic pattern with a raised ferritin.",
    "id": 54
  },
  {
    "domain": "hematology",
    "chapter": 7,
    "question": "A 62-year-old man has a white cell count of 142 x10^9/L, splenomegaly, and a film showing neutrophils at all stages of maturation with myelocyte predominance, basophils at 6 percent, and 3 percent blasts. Which result would most directly confirm the suspected diagnosis?",
    "options": {
      "A": "A markedly elevated leukocyte alkaline phosphatase score on cytochemical staining of the smear",
      "B": "Detection of the BCR::ABL1 fusion by FISH or quantitative reverse-transcription PCR",
      "C": "Monoclonal B cell expansion with CD5 and CD23 positivity on flow cytometry of blood",
      "D": "A JAK2 V617F mutation identified on molecular testing of peripheral blood cells"
    },
    "answer": "B",
    "explanation": "The film is typical of chronic myeloid leukemia, which is defined by the BCR::ABL1 fusion from t(9;22), detected by FISH or PCR. A high leukocyte alkaline phosphatase score points to a reactive leukemoid reaction, since the score is low in CML. CD5 and CD23 positive B cells define chronic lymphocytic leukemia, a mature lymphoid disorder that would not show myelocytes and basophilia. JAK2 V617F supports Philadelphia-negative myeloproliferative neoplasms such as polycythemia vera, which are excluded when the BCR::ABL1 fusion is present.",
    "id": 55
  },
  {
    "domain": "hematology",
    "chapter": 7,
    "question": "A film from a 7-year-old shows many blasts with scant agranular cytoplasm, strongly positive terminal deoxynucleotidyl transferase, negative myeloperoxidase, and CD19, CD10, and cytoplasmic CD79a expression. Which diagnosis best fits?",
    "options": {
      "A": "Acute myeloid leukemia with maturation, with Auer rods and strong myeloperoxidase positivity",
      "B": "Acute monocytic leukemia with strong nonspecific esterase staining that fluoride inhibits",
      "C": "Precursor T lymphoblastic leukemia with cytoplasmic CD3 and CD7 expression on the blasts",
      "D": "Precursor B lymphoblastic leukemia with common antigen expression"
    },
    "answer": "D",
    "explanation": "CD19, CD10, cytoplasmic CD79a, and TdT with a negative myeloperoxidase establish a B lineage lymphoblast, the most common childhood leukemia. Acute myeloid leukemia would stain for myeloperoxidase and often show Auer rods. Monocytic leukemia would show nonspecific esterase positivity inhibited by fluoride and markers such as CD14 and CD64. T lymphoblastic leukemia would show cytoplasmic CD3 and CD7 rather than the B lineage markers described.",
    "id": 56
  },
  {
    "domain": "hematology",
    "chapter": 7,
    "question": "A technologist notices bundles of Auer rods in hypergranular promyelocytes on a film from a 38-year-old woman who is bruising, with an INR of 1.8 and a fibrinogen of 0.9 g/L. What is the most appropriate immediate action?",
    "options": {
      "A": "Phone the clinician at once and request coagulation studies in parallel",
      "B": "Hold the report until the PML::RARA result returns from the reference laboratory",
      "C": "File the film for review at the next scheduled hematology teaching rounds on Friday",
      "D": "Recommend a repeat count in one week to confirm the blast percentage before acting"
    },
    "answer": "A",
    "explanation": "Faggot cells with a consumptive coagulopathy indicate acute promyelocytic leukemia, where treatment with retinoic acid must start promptly to reduce fatal hemorrhage, so verbal notification cannot wait for genetics. Holding the report until the fusion result returns risks avoidable death. Deferring the film to scheduled rounds delays recognition of an emergency. A repeat count in a week ignores that the patient may bleed fatally within days.",
    "id": 57
  },
  {
    "domain": "hematology",
    "chapter": 7,
    "question": "A film shows neutrophils with bilobed, spectacle-shaped nuclei and coarse chromatin in a healthy 25-year-old with no cytopenias and a family history of the same finding. The technologist is deciding how to classify these cells in the differential. What is the best approach?",
    "options": {
      "A": "Count them as bands and comment on a left shift suggesting infection",
      "B": "Report them as dysplastic neutrophils and recommend a bone marrow examination at once",
      "C": "Count them as segmented neutrophils and comment on Pelger-Huet anomaly",
      "D": "Exclude them from the count because their nuclei cannot be classified reliably"
    },
    "answer": "C",
    "explanation": "Inherited Pelger-Huet cells have normal function and chromatin that is mature, so they are counted with segmented neutrophils and the anomaly is noted. Counting them as bands creates a false left shift and may trigger an unwarranted infection workup. Calling them dysplastic in a healthy person with a family history would prompt an unnecessary marrow. Excluding cells from the differential distorts the percentages and the absolute counts.",
    "id": 58
  },
  {
    "domain": "hematology",
    "chapter": 7,
    "question": "A laboratory measured a white cell count of 18.0 x10^9/L on a newborn, and the film shows 90 nucleated red cells per 100 white cells counted. What is the corrected white cell count?",
    "options": {
      "A": "16.2 x10^9/L, obtained by multiplying the measured count by 0.9",
      "B": "9.5 x10^9/L, obtained by multiplying by 100 and dividing by 190",
      "C": "20.9 x10^9/L, obtained by multiplying the measured count by 100 and dividing by 90",
      "D": "17.1 x10^9/L, obtained by subtracting 0.9 from the measured count"
    },
    "answer": "B",
    "explanation": "The correction multiplies the measured count by 100 and divides by 100 plus the nucleated red cells per 100 white cells, giving 18.0 x 100/190 = 9.5 x10^9/L, because the analyzer has counted the nucleated red cells as leukocytes. Multiplying by 0.9 has no basis in the correction and leaves most of the error. Dividing by 90 omits the added 100 and wrongly inflates the result. Subtracting a small constant ignores the proportion of nucleated cells entirely.",
    "id": 59
  },
  {
    "domain": "hematology",
    "chapter": 7,
    "question": "A 70-year-old has a lymphocyte count of 28 x10^9/L made up of small mature cells and many smudge cells. Flow cytometry shows CD19, CD5, CD23 positivity, weak CD20, and weak kappa light chain expression. Which additional finding would be a recognized complication of this disorder?",
    "options": {
      "A": "Auer rods in circulating blasts with strong myeloperoxidase positivity on cytochemistry",
      "B": "Philadelphia chromosome positivity with a BCR::ABL1 fusion detected by FISH on blood",
      "C": "Rouleaux with a monoclonal IgM spike causing symptoms of hyperviscosity in the patient",
      "D": "Autoimmune hemolytic anemia with a positive direct antiglobulin test"
    },
    "answer": "D",
    "explanation": "The immunophenotype fits chronic lymphocytic leukemia, which is linked to autoimmune hemolytic anemia and immune thrombocytopenia through dysregulated B cell function. Auer rods belong to myeloid blasts. The Philadelphia chromosome defines chronic myeloid leukemia and some acute lymphoblastic leukemias. Hyperviscosity from IgM is a feature of Waldenstrom macroglobulinemia and not the usual presentation of CLL.",
    "id": 60
  },
  {
    "domain": "hematology",
    "chapter": 7,
    "question": "A 55-year-old has anemia, a serum creatinine of 245 umol/L, a calcium of 3.1 mmol/L, lytic lesions, and 38 percent clonal plasma cells in the marrow. The urine dipstick shows only trace protein. Which statement best explains the dipstick finding?",
    "options": {
      "A": "The dipstick reacts mainly with albumin and misses free light chains",
      "B": "The kidney excretes light chains only when the serum calcium level is normal",
      "C": "The monoclonal protein is IgM, which is too large to enter the urine",
      "D": "The patient has a laboratory error in the reagent strip that must be repeated"
    },
    "answer": "A",
    "explanation": "The dipstick protein pad is sensitive to albumin, so Bence Jones light chains can be present in large amounts while the strip reads trace, and urine protein electrophoresis or serum free light chain testing is needed. Calcium does not govern light chain excretion; hypercalcemia in fact contributes to renal injury. Nothing in the findings suggests an IgM paraprotein. A reagent error is possible in principle, but the pattern is a well-known limitation rather than a fault.",
    "id": 61
  },
  {
    "domain": "hematology",
    "chapter": 7,
    "question": "A bone marrow aspirate for suspected leukemia arrives at the laboratory two days late in a serum separator tube that was refrigerated. The cells are largely nonviable on flow cytometry. What is the most appropriate response?",
    "options": {
      "A": "Report the available results and omit any comment on the viability of the cells",
      "B": "Proceed with cytogenetics, since dead cells divide poorly but still yield enough metaphases",
      "C": "Add fresh fixative to the tube to restore viability before staining the cells",
      "D": "Reject for flow cytometry, document the pre-analytic failure, and request a new specimen"
    },
    "answer": "D",
    "explanation": "The wrong container, refrigeration, and delay compromise viability and antigen integrity, so flow results would be unreliable, and the correct response is to reject, document, and recollect if possible. Reporting results without comment risks misleading the clinician. Dead cells do not divide, so cytogenetic culture would fail. Fixative cannot restore viability and would destroy the sample's usefulness for other studies.",
    "id": 62
  },
  {
    "domain": "hematology",
    "chapter": 7,
    "question": "A film from a patient treated with filgrastim last week shows a white cell count of 35 x10^9/L, marked left shift with myelocytes, toxic granulation, and Dohle bodies, and no blasts. Which interpretation is the most reasonable?",
    "options": {
      "A": "Reactive granulocytic response to growth factor therapy, with a comment urging correlation",
      "B": "Chronic myeloid leukemia, which requires immediate chemotherapy to prevent leukostasis and organ damage",
      "C": "Acute promyelocytic leukemia, which demands emergency retinoic acid therapy and coagulation studies",
      "D": "Chronic lymphocytic leukemia with transformation, which requires cytogenetics and flow cytometry"
    },
    "answer": "A",
    "explanation": "Growth factors drive a left shift with toxic change that may mimic infection or leukemia, and a recent history of filgrastim explains the picture. CML would show basophilia and a different distribution without toxic changes, and treatment would not be started on a film alone. APL would require abnormal promyelocytes and a coagulopathy. CLL concerns mature lymphocytes and would not produce a granulocytic left shift.",
    "id": 63
  },
  {
    "domain": "hematology",
    "chapter": 8,
    "question": "A 19-year-old woman has recurrent nosebleeds and heavy menstrual bleeding. The platelet count is normal, the PT is normal, and the aPTT is mildly prolonged. Von Willebrand factor activity is 28 percent and antigen is 31 percent, with a factor VIII of 40 percent. Which diagnosis best fits?",
    "options": {
      "A": "Type 1 von Willebrand disease, a partial quantitative deficiency of the factor",
      "B": "Hemophilia A with a severe deficiency of coagulation factor VIII and deep joint bleeding",
      "C": "Glanzmann thrombasthenia with absent aggregation to platelet agonists other than ristocetin alone",
      "D": "Vitamin K deficiency with reduced activity of the vitamin K-dependent coagulation factors"
    },
    "answer": "A",
    "explanation": "Mucocutaneous bleeding with proportionally reduced activity and antigen and a modestly reduced factor VIII indicates type 1 von Willebrand disease, a quantitative deficiency. Hemophilia A causes deep bleeding in males and would not reduce von Willebrand factor. Glanzmann thrombasthenia presents with a normal vWF and a normal aPTT but absent platelet aggregation. Vitamin K deficiency prolongs the PT first and affects factors II, VII, IX, and X, none of which explains a low von Willebrand level.",
    "id": 64
  },
  {
    "domain": "hematology",
    "chapter": 8,
    "question": "A technologist calculates an INR for a patient on warfarin using a patient PT of 30 seconds, a mean normal PT of 12 seconds, and a reagent ISI of 1.0. What INR should be reported?",
    "options": {
      "A": "1.0, because an ISI of 1.0 cancels the patient to normal ratio entirely",
      "B": "4.5, because the ratio is multiplied by the square of the ISI value",
      "C": "18.0, because the mean normal PT is subtracted from the patient PT",
      "D": "2.5, because the patient to normal ratio is raised to the ISI"
    },
    "answer": "D",
    "explanation": "The INR equals the patient PT divided by the mean normal PT, raised to the power of the ISI, so 30/12 = 2.5 and 2.5 to the power of 1.0 remains 2.5. An ISI of 1.0 does not cancel the ratio; it leaves the ratio unchanged. Multiplying by the square of the ISI has no basis. Subtracting the normal PT gives a difference in seconds, not a standardized ratio.",
    "id": 65
  },
  {
    "domain": "hematology",
    "chapter": 8,
    "question": "A technologist receives a light blue tube from a patient with a hematocrit of 0.68 and finds a prolonged PT and aPTT on a fully filled tube. A repeat on a tube with reduced citrate volume gives normal results. What is the best explanation for the first result?",
    "options": {
      "A": "A lupus anticoagulant that neutralized the phospholipid in the reagent of the assay",
      "B": "Excess citrate relative to the small plasma volume in a polycythemic specimen",
      "C": "Contamination of the specimen with unfractionated heparin drawn from an indwelling intravenous line",
      "D": "Platelet activation from a prolonged tourniquet time during the collection of the specimen"
    },
    "answer": "B",
    "explanation": "At a high hematocrit there is less plasma in each tube, so the fixed citrate volume is excessive and chelates the calcium added by the reagent, prolonging every clotting test. A lupus anticoagulant would not normalize with a changed citrate volume. Heparin would not correct on a new tube from a clean draw with only the citrate changed. Platelet activation would tend to shorten, not prolong, the clotting times.",
    "id": 66
  },
  {
    "domain": "hematology",
    "chapter": 8,
    "question": "A 4-year-old boy has swollen knees after minor trauma, a prolonged aPTT of 62 seconds that corrects on a 1:1 mix with normal plasma, and a normal PT, thrombin time, and platelet count. The factor IX activity is normal. Which test should be requested next?",
    "options": {
      "A": "Dilute Russell viper venom time to look for a lupus anticoagulant in the plasma",
      "B": "Ristocetin-induced platelet aggregation to examine platelet adhesion and von Willebrand function",
      "C": "Factor XIII clot solubility testing to look for a fibrin cross-linking defect",
      "D": "Factor VIII activity, with a von Willebrand panel to exclude type 2N"
    },
    "answer": "D",
    "explanation": "Hemarthrosis, a prolonged aPTT that corrects, and a normal factor IX direct attention to factor VIII, and a von Willebrand panel excludes type 2N, which mimics mild hemophilia A. A lupus anticoagulant fails to correct and does not cause joint bleeding. Ristocetin aggregation addresses platelet adhesion, which would not account for a prolonged aPTT that corrects. Factor XIII deficiency leaves the aPTT normal.",
    "id": 67
  },
  {
    "domain": "hematology",
    "chapter": 8,
    "question": "A patient's aPTT is 68 seconds. The immediate 1:1 mix gives 66 seconds and the two-hour incubated mix gives 70 seconds. The dRVVT is also prolonged, and shortens with added phospholipid. Which interpretation is most appropriate?",
    "options": {
      "A": "A factor VIII deficiency that corrects fully when mixed with normal plasma",
      "B": "A lupus anticoagulant, an immediate and phospholipid-dependent inhibitor",
      "C": "A time-dependent factor VIII autoantibody causing acquired hemophilia in an older adult",
      "D": "Heparin contamination that would be neutralized by the addition of protamine to plasma"
    },
    "answer": "B",
    "explanation": "Failure to correct on mixing indicates an inhibitor, and the confirmatory shortening with excess phospholipid in the dRVVT identifies a lupus anticoagulant. A factor deficiency would correct on mixing. A factor VIII autoantibody is typically time-dependent and does not affect the dRVVT. Heparin would prolong the thrombin time and is neutralized by a heparin-binding reagent, which would not account for the phospholipid-dependent pattern.",
    "id": 68
  },
  {
    "domain": "hematology",
    "chapter": 8,
    "question": "A newborn infant not given vitamin K at birth presents with melena and bruising. The PT is markedly prolonged, the aPTT is prolonged, the platelet count and fibrinogen are normal. Which factors are reduced?",
    "options": {
      "A": "Factors VIII and XI together with von Willebrand factor and fibrinogen",
      "B": "Factors II, VII, IX, and X, which need vitamin K",
      "C": "Factors V and XIII together with fibrinogen and the contact activation proteins",
      "D": "Antithrombin and plasminogen only, with all of the clotting factors remaining normal"
    },
    "answer": "B",
    "explanation": "Vitamin K is needed to carboxylate factors II, VII, IX, and X, so their deficiency prolongs the PT and aPTT while platelets and fibrinogen remain normal. Factors VIII and XI and von Willebrand factor do not depend on vitamin K. Factor V, factor XIII, and fibrinogen are also independent of vitamin K. Antithrombin and plasminogen are not vitamin K-dependent and their loss would not produce this pattern.",
    "id": 69
  },
  {
    "domain": "hematology",
    "chapter": 8,
    "question": "A 28-year-old with sepsis has a platelet count of 42 x10^9/L, prolonged PT and aPTT, fibrinogen 0.8 g/L, and a markedly elevated D-dimer, with factor VIII reduced. Which diagnosis is best supported?",
    "options": {
      "A": "Isolated vitamin K deficiency from several days of broad-spectrum antibiotic therapy",
      "B": "Thrombotic thrombocytopenic purpura from severe ADAMTS13 deficiency with a normal PT and aPTT",
      "C": "Early cirrhosis with preserved factor VIII production and a mild thrombocytopenia",
      "D": "Disseminated intravascular coagulation from consumption of factors and platelets"
    },
    "answer": "D",
    "explanation": "Thrombocytopenia, prolonged clotting times, low fibrinogen, high D-dimer, and a consumed factor VIII in sepsis are the picture of DIC. Vitamin K deficiency would not lower fibrinogen or platelets nor elevate D-dimer so markedly. TTP has a normal PT and aPTT. Cirrhosis generally preserves or raises factor VIII, which is a feature that separates it from DIC.",
    "id": 70
  },
  {
    "domain": "hematology",
    "chapter": 8,
    "question": "A patient on unfractionated heparin has a baseline aPTT prolonged by a known lupus anticoagulant, and the aPTT no longer tracks dose. Which monitoring approach is most appropriate?",
    "options": {
      "A": "Continue aPTT monitoring and adjust the dose to the old therapeutic range",
      "B": "Monitor with the PT and INR, because heparin prolongs those tests reliably",
      "C": "Switch to an anti-factor Xa assay calibrated for heparin",
      "D": "Measure the thrombin time and titrate to double the control value"
    },
    "answer": "C",
    "explanation": "A baseline-prolonged aPTT makes it unreliable for titration, and the chromogenic anti-Xa assay measures heparin effect directly and is not affected by the lupus anticoagulant. Continuing aPTT monitoring risks underdosing because the baseline is already prolonged. The PT and INR are not designed for heparin monitoring. The thrombin time is so sensitive to heparin that it becomes unmeasurably long at therapeutic levels.",
    "id": 71
  },
  {
    "domain": "hematology",
    "chapter": 8,
    "question": "A 52-year-old develops a platelet fall from 260 to 95 x10^9/L on day seven of heparin and a new deep venous thrombosis. The 4Ts score is high. What is the most appropriate immediate step?",
    "options": {
      "A": "Stop all heparin, send anti-PF4 testing, and start a non-heparin anticoagulant",
      "B": "Continue heparin at a higher dose and transfuse platelets to correct the count",
      "C": "Switch to low molecular weight heparin because it carries no risk of this reaction",
      "D": "Wait for the confirmatory functional assay before changing any therapy"
    },
    "answer": "A",
    "explanation": "Suspected heparin-induced thrombocytopenia calls for stopping all heparin, testing for anti-PF4/heparin antibodies, and starting a non-heparin anticoagulant, because the risk of thrombosis is high. Raising the heparin dose and transfusing platelets feeds the reaction. Low molecular weight heparin still cross-reacts with the antibody. Waiting for a functional confirmation delays treatment when clinical probability is high.",
    "id": 72
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 9,
    "question": "A group A patient with gram-negative sepsis and colon cancer shows anti-A 4+, anti-B 2+ in the forward group, and anti-B in the serum on reverse grouping. The autocontrol is negative. Which explanation is most likely?",
    "options": {
      "A": "A true AB phenotype with unusually weak serum antibody production in an older patient",
      "B": "Contamination of the specimen with group B red cells during collection at the bedside",
      "C": "Acquired B phenotype from bacterial deacetylation of A antigen",
      "D": "A mixed-field reaction from a recent non-identical stem cell transplant in the patient"
    },
    "answer": "C",
    "explanation": "Bacterial enzymes convert the A antigen to a B-like structure so a group A patient appears to carry B, but the serum still contains anti-B, which a true AB person would lack. A true AB individual cannot have anti-B in the serum. Contamination with group B cells would give a mixed-field pattern and would not explain the infection setting. A mixed-field reaction after transplant would show two populations of cells, not a uniform weak anti-B reaction with a matching history.",
    "id": 73
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 9,
    "question": "A technologist grouping an elderly patient finds forward group O and reverse group reactions that are weak with A1 cells and absent with B cells. The autocontrol is negative. What should be done first?",
    "options": {
      "A": "Report the patient as group O and release the result immediately to the ward",
      "B": "Repeat after incubating the reverse group at room temperature or 4 C",
      "C": "Test with anti-H lectin to rule out the Bombay phenotype before any other step",
      "D": "Request a bone marrow sample to confirm antibody production by the plasma cells"
    },
    "answer": "B",
    "explanation": "Elderly patients often have weak antibody production, and enhancing the reverse reaction by incubating at room temperature or 4 C for 15 to 30 minutes is the usual first step. Reporting group O with a reverse type missing expected antibodies skips resolution of the discrepancy. A Bombay phenotype would show strong reactions with O cells in reverse typing, not weak reactions. A bone marrow sample has no role in routine ABO resolution.",
    "id": 74
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 9,
    "question": "A hospital protocol states that a compatibility sample must be collected within three days of transfusion in a patient transfused two weeks ago. A nurse brings a sample labelled at the nursing station before the patient was drawn. What should the laboratory do?",
    "options": {
      "A": "Accept it, because the patient was transfused during a previous admission to this hospital",
      "B": "Accept it if the nurse initials the label and verifies the name verbally",
      "C": "Correct the label after confirming the identity of the patient by telephone call",
      "D": "Reject it, request a new bedside-labelled sample, and document the event"
    },
    "answer": "D",
    "explanation": "Bedside labelling at the time of collection is the safeguard against wrong blood in tube, and a sample labelled elsewhere cannot be confirmed to come from the patient named. Accepting it ignores the safeguard. Initials and verbal verification cannot substitute for labelling in the patient's presence. Correcting a label for the collector defeats the purpose of the rule, and a telephone confirmation does not prove the sample's origin.",
    "id": 75
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 9,
    "question": "A D-negative mother delivers a D-positive infant. The rosette test is positive and the Kleihauer-Betke test shows 0.8 percent fetal cells. Assuming a maternal blood volume of 5000 mL and one vial neutralizing 30 mL of whole blood, how many vials are indicated using the common round-down-and-add-one rule?",
    "options": {
      "A": "2 vials, since 1.33 rounds down to one vial and one is added",
      "B": "1 vial, since the standard 300 microgram dose covers any size of fetomaternal hemorrhage",
      "C": "3 vials, since 0.8 percent is multiplied by 30 and then rounded up",
      "D": "4 vials, since the fetal cell count is divided by ten and then doubled"
    },
    "answer": "A",
    "explanation": "The fetal blood volume is 0.008 x 5000 = 40 mL, and 40/30 is 1.33, which under the stated rule becomes one vial plus one vial for safety, or two. One vial covers only about 30 mL of fetal whole blood, so it would be insufficient. Multiplying the percentage by 30 is not part of the calculation. Dividing by 10 and doubling has no basis in the method.",
    "id": 76
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 9,
    "question": "A patient types as D-negative by immediate spin, but a weak D test by indirect antiglobulin is positive, and the Rh control is negative. The patient is a woman of childbearing age. What is the best management where the policy uses genotyping?",
    "options": {
      "A": "Report as D-positive and withhold Rh immune globulin in all cases of weak D",
      "B": "Perform RHD genotyping and manage according to the variant found",
      "C": "Discard the result, because weak D cannot be reliably detected by any method",
      "D": "Repeat the weak D test using a different lot of anti-human globulin reagent"
    },
    "answer": "B",
    "explanation": "RHD genotyping identifies weak D types 1, 2, and 3, which can be managed as D positive, and partial D types, which can form anti-D and are managed as D negative. Declaring D positive for everyone risks sensitization in partial D patients. Weak D can be detected, and discarding the result gives no guidance. Repeating with another lot may not resolve the clinical question that genotyping answers.",
    "id": 77
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 9,
    "question": "A tube reverse type shows an immediate-spin reaction in the reverse grouping with both A1 and B cells and also with O cells and the autocontrol, but the reaction disappears when the test is performed with prewarmed reagents at 37 C. What is the cause?",
    "options": {
      "A": "An A2 phenotype with anti-A1 reacting only with the A1 reverse cells",
      "B": "The Bombay phenotype with potent anti-H that agglutinates group O cells at 37 C",
      "C": "Rouleaux caused by increased serum globulins, which are dispersed by saline replacement",
      "D": "A cold-reacting autoantibody such as anti-I, which reacts below 37 C"
    },
    "answer": "D",
    "explanation": "Reactivity with all cells including the autocontrol that disappears at 37 C is typical of a cold autoantibody. Anti-A1 reacts only with A1 cells and not with B or O cells. Bombay serum reacts with group O cells, but the reaction persists at 37 C and the autocontrol is negative. Rouleaux is recognized by stacking and is cleared by saline replacement, not by warming.",
    "id": 78
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 9,
    "question": "A technologist suspects rouleaux in a reverse grouping of a patient with high globulin levels. Which procedure confirms the suspicion and resolves the problem?",
    "options": {
      "A": "Adding more reagent cells to the tube to dilute the serum proteins present",
      "B": "Heating the serum to 56 C before testing the patient plasma again",
      "C": "Replacing the serum with saline after centrifugation and re-examining",
      "D": "Using a longer centrifugation time to break up the stacks of cells"
    },
    "answer": "C",
    "explanation": "Saline replacement removes the proteins that cause stacking, so rouleaux disperse while true agglutination remains. Adding more cells dilutes antigen not protein and does not resolve stacking. Heating serum to 56 C inactivates complement and does not remove the proteins causing the effect. Longer centrifugation may pack cells more tightly and make interpretation harder.",
    "id": 79
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 9,
    "question": "A laboratory's daily QC of anti-D reagent uses only a strongly D-positive homozygous cell and a D-negative cell. Which change would better detect a deteriorating reagent?",
    "options": {
      "A": "Add a heterozygous D-positive cell expected to give a weaker reaction",
      "B": "Test only the D-negative cell each day in order to save reagent",
      "C": "Use the patient samples as the sole control of each run of testing",
      "D": "Replace the D-negative control with a second homozygous D-positive cell on each shift"
    },
    "answer": "A",
    "explanation": "A heterozygous cell carries a single dose of antigen and gives the weakest expected positive reaction, so a loss of reagent potency appears there first. Testing only the negative cell can never detect loss of potency. Patient samples are not controls because their antigen status is unknown. Two homozygous cells give strong reactions that remain positive even when potency has fallen.",
    "id": 80
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 9,
    "question": "A technologist is told that a newborn's cord blood gave a 4+ reaction with anti-A and anti-B and with the Rh control. What is the most appropriate interpretation?",
    "options": {
      "A": "The infant is group AB and D positive, and the typing result is valid",
      "B": "The infant is group O, and the positive control proves the cells are D negative",
      "C": "The cells are likely coated, so the D typing is invalid and needs washing",
      "D": "The infant has the Bombay phenotype and requires special rare blood from the supplier"
    },
    "answer": "C",
    "explanation": "A positive Rh control means the cells agglutinate regardless of anti-D, so the D result cannot be interpreted, and cord blood contaminated with Wharton jelly or coated cells should be washed and retested. Reporting AB positive on this basis ignores the control. A group O infant would not react with anti-A and anti-B. Bombay cells would not react with anti-A or anti-B.",
    "id": 81
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 10,
    "question": "A technologist finds that a patient's serum reacts with enzyme-untreated panel cells in the antiglobulin phase but fails to react with the same cells after ficin treatment. Which antibody specificity best fits this behaviour?",
    "options": {
      "A": "Anti-Jka from the Kidd system, whose antigen reacts more strongly after enzyme treatment",
      "B": "Anti-E from the Rh system, whose antigen reacts more strongly after enzyme treatment",
      "C": "Anti-Lea from the Lewis system, whose antigen reacts more strongly after enzyme treatment",
      "D": "Anti-Fya from the Duffy system, whose antigen is destroyed by ficin"
    },
    "answer": "D",
    "explanation": "Duffy antigens are destroyed by proteolytic enzymes, so an anti-Fya reacts with untreated cells but not with ficin-treated cells. Kidd antigens are enhanced by enzymes and would show stronger reactions after treatment. Rh antigens are enhanced as well, so anti-E would react more strongly. Lewis antigens are also enhanced by enzymes, and anti-Lea is generally an IgM antibody of limited significance.",
    "id": 82
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 10,
    "question": "A patient with anti-c and anti-K needs two units of red cells. Assuming 20 percent of units are c-negative and 91 percent are K-negative, about how many random units must be tested to find two that are compatible?",
    "options": {
      "A": "About 11 units, since 0.182 of units lack both antigens",
      "B": "About 2 units, since 91 percent of units are K-negative and sufficient",
      "C": "About 5 units, since 20 percent of units are c-negative and the rest compatible",
      "D": "About 22 units, since the two antigen frequencies are added together first"
    },
    "answer": "A",
    "explanation": "The probability that a unit lacks both antigens is 0.20 x 0.91 = 0.182, and 2 divided by 0.182 is about 11. Using only the K frequency ignores the far more limiting c requirement. Using only the c frequency ignores the second antibody. Adding frequencies is not valid, since independent probabilities multiply.",
    "id": 83
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 10,
    "question": "A patient transfused six days ago has a falling hemoglobin, new jaundice, a positive DAT, and a newly detected antibody to a Kidd antigen on the antibody screen. The pretransfusion screen had been negative. What is the most likely explanation?",
    "options": {
      "A": "A transfusion-related acute lung injury caused by donor antibodies in the component",
      "B": "An acute hemolytic reaction from an ABO-incompatible transfusion given six days earlier",
      "C": "A delayed hemolytic reaction from an anamnestic antibody response",
      "D": "A febrile nonhemolytic reaction from cytokines released in the stored component"
    },
    "answer": "C",
    "explanation": "A previously sensitized patient with an antibody below detection can mount a rapid anamnestic response to antigen-positive cells within days, and Kidd antibodies are the classic cause. TRALI presents with pulmonary edema within hours. An ABO-incompatible transfusion causes acute hemolysis during or immediately after the transfusion, not days later. Febrile nonhemolytic reactions produce fever and chills without a new antibody or a falling hemoglobin.",
    "id": 84
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 10,
    "question": "A negative indirect antiglobulin test tube fails to agglutinate IgG-coated check cells. What is the correct response?",
    "options": {
      "A": "Report the result as negative, since no agglutination occurred in the test tube",
      "B": "Treat the test as invalid and repeat it, checking the washing",
      "C": "Add more antihuman globulin and read again without repeating the wash step",
      "D": "Report the result as weakly positive because the check cells did not clump"
    },
    "answer": "B",
    "explanation": "Failure of the check cells to agglutinate shows that the antiglobulin reagent was neutralized or not added, so the negative result cannot be trusted and the test must be repeated from the beginning. Reporting negative would risk a missed antibody. Adding reagent without repeating the wash leaves free immunoglobulin that again neutralizes it. A weak positive has no basis, since a failed control invalidates the tube rather than indicating a positive reaction.",
    "id": 85
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 10,
    "question": "A patient with multiple myeloma receiving daratumumab has a positive antibody screen with all cells at the antiglobulin phase and a negative autocontrol. Which action is appropriate?",
    "options": {
      "A": "Report an alloantibody to a high-prevalence antigen and refer the patient for rare donors",
      "B": "Treat reagent cells with enzymes to remove the drug interference from the screen",
      "C": "Perform a cold autoadsorption using rabbit erythrocyte stroma to remove the antibody",
      "D": "Use DTT-treated reagent cells to remove CD38 reactivity, and supply K-negative units"
    },
    "answer": "D",
    "explanation": "Daratumumab binds CD38 on reagent red cells, and treating the cells with DTT denatures CD38 so underlying alloantibodies can be read, with the consequence that Kell antigens are also destroyed, so K-negative units are supplied by default. Reporting a high-prevalence antibody would be wrong since the drug is the cause. Enzymes do not remove CD38. Cold autoadsorption addresses cold autoantibodies and not drug interference.",
    "id": 86
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 10,
    "question": "A patient has a positive screen at immediate spin only, 3+ with all cells and the autocontrol, with no reaction at 37 C or at the antiglobulin phase. What is the most appropriate approach?",
    "options": {
      "A": "Report a clinically significant alloantibody and select antigen-negative units for the patient",
      "B": "Order a bone marrow examination to evaluate the patient for hemolysis",
      "C": "Recognize a cold autoantibody and retest with prewarmed reagents",
      "D": "Reject the sample as unsuitable because of suspected contamination with another specimen"
    },
    "answer": "C",
    "explanation": "A reaction present only at immediate spin and affecting every cell including the autocontrol is typical of a cold autoantibody such as anti-I, and prewarmed testing shows whether any warm reactive antibody is hiding. Declaring a clinically significant alloantibody is unsupported because no 37 C or antiglobulin reactivity exists. A marrow examination has no role in routine screening. The sample is not contaminated, since the pattern is reproducible and expected.",
    "id": 87
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 10,
    "question": "An emergency release is needed for a 28-year-old woman with massive hemorrhage whose blood group is unknown. Which of the following is the most appropriate supply?",
    "options": {
      "A": "Group O D-negative red cells with the physician's signed acknowledgment",
      "B": "Group AB D-positive red cells drawn from stock without any testing at all",
      "C": "Group A red cells, since that is the most common group in the population",
      "D": "Fully crossmatched red cells held until the antibody screen has been finished"
    },
    "answer": "A",
    "explanation": "Group O red cells can be given to any recipient, and D-negative units are chosen for a woman of childbearing potential to avoid D sensitization, with the signed acknowledgment of risk and a pretransfusion sample drawn first. Group AB red cells carry both antigens and would be incompatible with group O or A or B plasma. Group A cells could cause a fatal reaction in a group O or B patient. Waiting for a full crossmatch ignores the need for immediate resuscitation.",
    "id": 88
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 10,
    "question": "A recipient with a negative antibody screen, no antibody history, and two concordant ABO determinations is to receive a unit by electronic crossmatch. Which condition is required for this to be acceptable?",
    "options": {
      "A": "The computer must be able to override a mismatch if the clinician requests it",
      "B": "The system must be validated and must block release of an incompatible unit",
      "C": "The sample must be tested again at 37 C in the antiglobulin phase of the test",
      "D": "The patient must have been transfused at least once in the past year"
    },
    "answer": "B",
    "explanation": "Electronic crossmatch is acceptable only when the computer system has been validated and the logic prevents release of an incompatible unit, in addition to the two ABO determinations and negative history. An override defeats the safeguard. An antiglobulin-phase test belongs to the serologic crossmatch, which the electronic method replaces. A transfusion history is not a requirement, and in fact a history of antibodies would exclude the electronic method.",
    "id": 89
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 10,
    "question": "During a transfusion a patient develops fever, rigors, and hypotension. The clerical check is correct, the post-transfusion plasma is not hemolyzed, and the DAT is negative. The unit is a platelet concentrate stored at room temperature. Which investigation is most important?",
    "options": {
      "A": "Repeat the antibody screen only, because alloimmunization is the most likely cause here",
      "B": "Measure haptoglobin and bilirubin to evaluate the patient for intravascular hemolysis",
      "C": "Culture the component and the patient, and Gram stain the bag contents",
      "D": "Measure BNP to look for volume overload from the transfusion in the patient"
    },
    "answer": "C",
    "explanation": "Fever, rigors, and hypotension with a room-temperature platelet component suggest bacterial contamination, and culture and Gram stain are urgent, since septic reactions are life-threatening. Repeating only the antibody screen does not address infection. Haptoglobin and bilirubin investigate hemolysis, which the clean plasma and negative DAT make unlikely. BNP evaluates circulatory overload, which presents with respiratory distress and hypertension rather than shock.",
    "id": 90
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 11,
    "question": "A 68-year-old man with a hemoglobin of 64 g/L is transfused two units of red cells and is stable. A technologist reviews the order. What post-transfusion hemoglobin would be expected if there is no bleeding or hemolysis, and what should the technologist consider if the value is only 66 g/L?",
    "options": {
      "A": "About 84 g/L, and consider ongoing bleeding, hemolysis, or an incorrect post-transfusion sample collection time",
      "B": "About 94 g/L, and consider that the patient has received too little volume for his body weight",
      "C": "About 74 g/L, and consider repeating the crossmatch because a mild incompatibility has probably occurred",
      "D": "About 104 g/L, and consider that iron overload from the transfusion has artificially elevated the measurement"
    },
    "answer": "A",
    "explanation": "One unit raises hemoglobin by roughly 10 g/L in an adult, so two units should give about 84 g/L, and a value near 66 g/L points to bleeding, hemolysis, or a sampling problem. An expected rise of 30 g/L would imply three units, which were not given. A rise of only 10 g/L would suit a single unit. A rise of 40 g/L is not physiologically expected, and a clinically relevant iron overload does not occur after two units or change a hemoglobin assay.",
    "id": 91
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 11,
    "question": "A transfusion service technologist is preparing platelets for a 1.7 m2 patient. The pre-transfusion count is 10 x10^9/L, and the 1-hour post-transfusion count is 40 x10^9/L after a dose of 3.0 x10^11 platelets. What is the corrected count increment and its interpretation?",
    "options": {
      "A": "17, which is below the acceptable limit and suggests refractoriness requiring HLA-matched platelets",
      "B": "17, which is above 7.5 and indicates a satisfactory response to the transfusion",
      "C": "30, which is a poor response because it is lower than the pre-transfusion count multiplied by three",
      "D": "10, which is borderline and needs a repeat count at 24 hours before any conclusion is made"
    },
    "answer": "B",
    "explanation": "The increment is 30 x10^9/L, multiplied by 1.7 gives 51, divided by 3.0 gives a CCI of 17, well above the 7.5 threshold for a one-hour sample, so the response is satisfactory. Calling the value refractory would require a repeatedly low CCI, and a single adequate value does not suggest that. The raw increment of 30 is not the corrected value and cannot be judged against the pre-count in that way. A CCI of 10 comes from an incorrect calculation, and in any case it would still exceed the one-hour limit.",
    "id": 92
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 11,
    "question": "A patient with a negative antibody screen and no history of antibodies needs two units of red cells. The hospital has a validated computer system with ABO and RhD results on two separate samples. Which crossmatch method is acceptable?",
    "options": {
      "A": "A full antiglobulin crossmatch only, since no abbreviated method may be used when units are issued",
      "B": "An immediate-spin crossmatch only, because computer systems cannot be validated for blood issue in Canada",
      "C": "An electronic crossmatch, since the screen is negative and the system meets validation requirements",
      "D": "No crossmatch at all, since a negative screen makes testing of the donor unit unnecessary"
    },
    "answer": "C",
    "explanation": "With a negative screen, no history of clinically significant antibodies, two concordant samples for ABO and RhD, and validated software with safeguards, an electronic crossmatch is acceptable. A full antiglobulin crossmatch is needed when antibodies are present or have been documented, not for every patient. The claim that computer systems cannot be validated is incorrect, since validated systems are routinely used. Skipping compatibility confirmation entirely is not acceptable, since the ABO check remains an essential safety step.",
    "id": 93
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 11,
    "question": "During the transfusion of the first unit, a patient develops flank pain, hypotension, and red urine after 20 mL. After the transfusion is stopped and the clerical check is completed, which laboratory step best detects intravascular hemolysis in the post-transfusion sample?",
    "options": {
      "A": "Perform a repeat antibody screen using enzyme-treated screening cells at room temperature",
      "B": "Compare the supernatant colour of the post-transfusion sample with that of the pre-transfusion sample",
      "C": "Test the donor unit for HLA antibodies using a lymphocytotoxicity technique",
      "D": "Measure the platelet count and calculate the corrected count increment"
    },
    "answer": "B",
    "explanation": "Free hemoglobin in the plasma of the post-transfusion specimen, seen as pink or red discolouration compared with the pre-transfusion sample, is the quickest sign of intravascular hemolysis. A repeat antibody screen is part of the next tier and does not directly show hemolysis. HLA antibody testing belongs in the evaluation of TRALI and is irrelevant to red cell destruction. A platelet count and CCI evaluate platelet response, not hemolysis.",
    "id": 94
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 11,
    "question": "A 72-year-old woman with heart failure develops dyspnea, hypertension, and distended neck veins during a transfusion. Chest imaging shows bilateral infiltrates, and her BNP is more than twice the pre-transfusion level. Which diagnosis is most likely, and what treatment is appropriate?",
    "options": {
      "A": "TRALI, so the patient should receive a diuretic and be listed as a donor deferral",
      "B": "TACO, so the transfusion should be stopped and a diuretic given",
      "C": "Anaphylaxis, so epinephrine should be given and IgA-deficient products used later",
      "D": "Febrile reaction, so antipyretics should be given and the transfusion restarted at half the rate"
    },
    "answer": "B",
    "explanation": "Hypertension, raised jugular venous pressure, a rising BNP, and a background of heart failure indicate hydrostatic pulmonary edema from circulatory overload, which responds to stopping the transfusion and giving a diuretic. TRALI typically has hypotension and no signs of left atrial hypertension, so diuretics would not be the principal treatment. Anaphylaxis would present with bronchospasm, urticaria, and shock. A simple febrile reaction would not produce pulmonary edema and hypertension.",
    "id": 95
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 11,
    "question": "A patient who received two units of red cells nine days ago is found to have a falling hemoglobin, mild jaundice, spherocytes, and a positive DAT. The pre-transfusion screen was negative. Which finding in the eluate would best explain the picture?",
    "options": {
      "A": "Anti-A reacting with donor group A red cells because of an ABO typing error",
      "B": "Anti-D formed against transfused cells because the patient was RhD negative",
      "C": "Anti-Jka in a patient with a previous pregnancy whose antibody had fallen below detection",
      "D": "Anti-HPA-1a reacting with transfused platelets and causing severe thrombocytopenia"
    },
    "answer": "C",
    "explanation": "A delayed hemolytic reaction occurs in a previously sensitized person whose antibody fell below the screen's sensitivity, and Kidd antibodies such as anti-Jka are the classic example. An ABO error would cause acute intravascular hemolysis within hours. A new primary anti-D response takes longer and would not produce a rapid hemolytic picture in this time frame without prior exposure. Anti-HPA-1a causes post-transfusion purpura, a platelet destruction syndrome, and does not explain the spherocytes and bilirubin rise.",
    "id": 96
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 11,
    "question": "A technologist is selecting products for a patient who is about to receive a hematopoietic stem cell transplant and needs platelets. Which modification is required for cellular blood components in this patient?",
    "options": {
      "A": "Gamma irradiation to prevent proliferation of donor T lymphocytes in the recipient",
      "B": "Saline washing to remove plasma proteins and prevent urticarial reactions",
      "C": "Freezing with glycerol to extend the shelf life during the transplant period",
      "D": "Pathogen reduction of the plasma only, with no change to cellular components"
    },
    "answer": "A",
    "explanation": "Irradiation inactivates donor T cells and prevents TA-GVHD, and it is required for stem cell transplant recipients and other at-risk groups. Washing removes plasma and is used for allergic reactions and IgA deficiency, not for GVHD prevention. Freezing with glycerol is used to store rare red cell units and does nothing for graft-versus-host risk. Treating only the plasma leaves the viable lymphocytes in the cellular component untouched.",
    "id": 97
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 11,
    "question": "A patient develops fever, rigors, and hypotension 10 minutes into a platelet transfusion. The clerical check is correct and the supernatant of the post-transfusion sample is not hemolysed. What is the most important next step in the laboratory?",
    "options": {
      "A": "Wait for the patient's temperature to fall, then crossmatch the platelets against the recipient's serum",
      "B": "Repeat the corrected count increment at 24 hours and begin HLA typing of the donor",
      "C": "Dispense a second platelet unit of the same group so the transfusion can resume without delay",
      "D": "Perform a Gram stain and culture on the platelet unit and on the recipient's blood"
    },
    "answer": "D",
    "explanation": "Rigors and hypotension within minutes of a platelet transfusion suggest bacterial contamination, so the unit and the patient's blood must be stained and cultured and co-components quarantined. Waiting for the fever to settle delays recognition of possible sepsis, and a crossmatch does not address contamination. The increment and HLA typing assess platelet refractoriness, which is a different problem. Issuing another unit of the same donation or product risks giving a second contaminated product.",
    "id": 98
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 11,
    "question": "A laboratory reviews a transfusion reaction involving severe hypoxemia 3 hours after plasma from a multiparous female donor. Chest imaging shows bilateral infiltrates, blood pressure is low, and the BNP is unchanged. What should the supplier be asked to do?",
    "options": {
      "A": "Test the donor for HLA and HNA antibodies and defer the donor from plasma donation if confirmed",
      "B": "Irradiate all the donor's future products and allow plasma donation to continue",
      "C": "Release the co-components of the same donation because the reaction was in one recipient only",
      "D": "Test the donor for cold agglutinins and recommend that the donor receive IgA-deficient products"
    },
    "answer": "A",
    "explanation": "The picture fits TRALI, and the usual mechanism is donor HLA or HNA antibodies, so the supplier should test the donor, quarantine co-components, and defer the donor from plasma-containing products if antibodies are found. Irradiation targets TA-GVHD and has no effect on antibody-mediated lung injury. Releasing co-components would put other recipients at risk. Cold agglutinins and IgA deficiency are unrelated to this presentation.",
    "id": 99
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 12,
    "question": "A pregnant woman types RhD negative, and her partner is RhD positive. Her 28-week screen is negative and she receives 300 micrograms of RhIG. Which statement about a later positive antibody screen showing anti-D is most accurate?",
    "options": {
      "A": "Any anti-D at this stage must be active immunization, because RhIG is cleared within a few hours of injection",
      "B": "Anti-D could be passive from RhIG, which gives a low titre that falls over several weeks",
      "C": "The result proves a fetal-maternal bleed has occurred, and no further RhIG is warranted after delivery",
      "D": "The antibody can be ignored, because anti-D never causes hemolytic disease in a first pregnancy"
    },
    "answer": "B",
    "explanation": "RhIG remains in the circulation for weeks and gives a detectable but low-titre anti-D, which is the expected explanation shortly after an injection. The suggestion that it clears within hours is wrong, since the half-life is about three weeks. A passive result does not show that a bleed occurred, and it does not remove the need for postpartum evaluation. Ignoring the antibody is also wrong, since anti-D can harm a fetus once active immunization has occurred and RhIG should be assessed against dates.",
    "id": 100
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 12,
    "question": "A cord blood sample from a group A infant born to a group O mother shows a weakly positive DAT, and the infant is jaundiced at 18 hours. Which result best supports ABO hemolytic disease of the newborn?",
    "options": {
      "A": "A strongly positive DAT with anti-D in an eluate from the infant's red cells",
      "B": "A positive Kleihauer-Betke test on the mother showing a large fetomaternal bleed",
      "C": "Absence of spherocytes on the smear and a negative eluate with group A cells",
      "D": "Spherocytes on the smear and anti-A in an eluate prepared from the infant's cells"
    },
    "answer": "D",
    "explanation": "ABO disease is expected to show spherocytes and an eluate that reacts with the infant's own antigen, in this case anti-A. A strong DAT with anti-D suggests Rh disease and would not occur in a mother of unknown RhD type with this history. A fetomaternal bleed assessment tests for the RhIG dose and has no role in confirming ABO disease. Absence of spherocytes with a negative eluate argues against an immune cause.",
    "id": 101
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 12,
    "question": "A Kleihauer-Betke test on an RhD-negative mother, 2 hours after delivery of an RhD-positive infant, shows 0.8 percent fetal cells. Assuming a maternal blood volume of 5,000 mL, 30 mL of fetal blood covered per 300 microgram vial, and one extra vial added, how many vials should be issued?",
    "options": {
      "A": "Three vials: 40 mL of fetal blood needs two vials, plus one extra for the estimate",
      "B": "Four vials: 40 mL of fetal blood needs three vials, plus one extra for the estimate",
      "C": "One vial: the standard postpartum dose already covers any fetal bleed under 50 mL",
      "D": "Two vials: 40 mL of fetal blood needs two vials, with no extra vial being added"
    },
    "answer": "A",
    "explanation": "Fetal whole blood volume is 0.8 percent of 5,000 mL, or 40 mL. Dividing by 30 mL per vial gives 1.33, which rounds up to 2 vials, and the extra vial brings the total to 3. Four vials would come from rounding 1.33 up twice. One vial protects only against 30 mL, so a 40 mL bleed exceeds it. Two vials omits the extra vial that the stem says should be added.",
    "id": 102
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 12,
    "question": "A patient with cold-induced hand discolouration has a positive DAT showing only C3d coating, and a specimen left on the counter before separation gave a weaker serum result. Which test best supports the likely diagnosis?",
    "options": {
      "A": "A Donath-Landsteiner test with a control tube held at 37 degrees Celsius throughout the incubation",
      "B": "An acid eluate from the red cells to identify a warm IgG autoantibody with Rh specificity",
      "C": "A cold agglutinin titre at 4 degrees Celsius, with the specimen kept warm until the serum is separated",
      "D": "A weak D test with an antiglobulin phase performed on the patient's own red cells"
    },
    "answer": "C",
    "explanation": "Complement-only coating with cold-induced symptoms and loss of antibody when the specimen cools suggests cold agglutinin disease, so a cold agglutinin titre on a warm-kept specimen is the confirmatory test. The Donath-Landsteiner test detects a biphasic IgG antibody, usually in children after infection. An eluate for warm IgG autoantibody fits a pattern with IgG coating, which is not seen here. A weak D test concerns RhD typing and does not address hemolysis.",
    "id": 103
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 12,
    "question": "A patient on long-term daratumumab needs red cells. The antibody screen is positive with every cell at the antiglobulin phase, and the autocontrol is negative. Which approach best clarifies whether an alloantibody is hidden?",
    "options": {
      "A": "Test the serum with ficin-treated cells, because enzymes remove the interference from CD38",
      "B": "Perform a Kleihauer-Betke test to determine whether the reactivity is fetal in origin",
      "C": "Repeat the screen at room temperature only, because daratumumab reacts only in the cold",
      "D": "Test the serum against DTT-treated red cells, because DTT removes CD38 and abolishes the interference"
    },
    "answer": "D",
    "explanation": "Daratumumab binds CD38 on reagent red cells, and treating cells with DTT denatures CD38 so that the interference disappears, allowing the true alloantibodies to be seen (while Kell antigens are also denatured, so K typing is handled separately). Ficin does not remove CD38. A Kleihauer-Betke test is irrelevant in this setting. Daratumumab reacts at the antiglobulin phase, so a room-temperature test would miss the point.",
    "id": 104
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 12,
    "question": "A 4-year-old child develops dark urine and pallor after a viral illness. A Donath-Landsteiner test shows hemolysis in the tube that was incubated at 4 degrees and then at 37 degrees, but not in the control tube kept at 37 degrees. What is the most likely diagnosis?",
    "options": {
      "A": "Cold agglutinin disease with anti-I specificity",
      "B": "Paroxysmal cold hemoglobinuria",
      "C": "Warm autoimmune hemolytic anemia with Rh specificity",
      "D": "Drug-induced hemolysis caused by a cephalosporin"
    },
    "answer": "B",
    "explanation": "The biphasic hemolysis is the signature of the Donath-Landsteiner antibody, an IgG anti-P that binds in the cold and activates complement on warming, typically in children after infection. Cold agglutinin disease shows agglutination rather than a biphasic lysis and an IgM antibody. Warm AIHA is a 37-degree IgG process with a strongly positive IgG DAT. A drug-induced process would depend on drug exposure and does not give the biphasic result.",
    "id": 105
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 12,
    "question": "A laboratory finds that a patient reacts with 7 of 10 panel cells. Anti-E is ruled out on three homozygous cells, while the remaining reactions match anti-c, and the patient's own cells type c-negative. How should the laboratory proceed?",
    "options": {
      "A": "Report anti-c, confirm the rule of three, and provide c-negative units with an antiglobulin crossmatch",
      "B": "Report an autoantibody, because all reactive patients with Rh antibodies are c-positive",
      "C": "Report anti-c only after treating the serum with DTT to remove Kell interference",
      "D": "Report no clinically significant antibody, because anti-c does not cause hemolysis"
    },
    "answer": "A",
    "explanation": "The patient's own cells are c-negative, so an anti-c alloantibody is plausible, and the rule of three confirms the specificity before c-negative units are chosen. Rh antibodies are not found only in c-positive patients, since antibodies form to antigens the patient lacks. DTT is used for Kell system and CD38 problems, not for anti-c. Anti-c is clinically significant and can cause both transfusion reactions and HDFN.",
    "id": 106
  },
  {
    "domain": "transfusion_medicine",
    "chapter": 12,
    "question": "A trauma patient has received 12 units of red cells in 3 hours, and is now oozing from every site. The fibrinogen is 0.9 g/L, the platelet count is 35 x10^9/L, and the temperature is 34.5 degrees Celsius. Which action should the technologist support first?",
    "options": {
      "A": "Switching to saline-washed red cells to reduce the plasma content of the transfusion",
      "B": "Giving more group O red cells alone until the hemoglobin reaches 100 g/L",
      "C": "Giving fibrinogen replacement and platelets through a blood warmer as part of a balanced protocol",
      "D": "Withholding all plasma products until a repeat antibody screen can be completed"
    },
    "answer": "C",
    "explanation": "After replacement of more than a blood volume, dilutional coagulopathy, low fibrinogen, thrombocytopenia, and hypothermia are the problem, so balanced products, cryoprecipitate or fibrinogen, platelets, and warming are needed. Washed red cells remove plasma proteins and would worsen the dilution. More red cells alone would deepen it. Withholding plasma for a screen would delay life-saving treatment, since emergency release does not wait for it.",
    "id": 107
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 13,
    "question": "A urine specimen is inoculated with a 1 microlitre calibrated loop onto blood agar. After overnight incubation, 60 colonies of Escherichia coli are counted. What is the colony count in CFU/mL, and how is the result usually interpreted for a midstream specimen from a symptomatic adult woman?",
    "options": {
      "A": "6,000 CFU/mL, below the traditional threshold and consistent with contamination of the specimen",
      "B": "600,000 CFU/mL, above any threshold and requiring further quantification by dilution of the sample",
      "C": "60,000 CFU/mL, a significant count that supports urinary tract infection in a symptomatic patient",
      "D": "60 CFU/mL, a trivial count that should be reported as no significant growth"
    },
    "answer": "C",
    "explanation": "A 1 microlitre loop is 0.001 mL, so each colony represents 1,000 CFU/mL and 60 colonies equal 60,000 CFU/mL. This is a single pathogen at a count that is clinically significant in a symptomatic woman, since lower thresholds apply to symptomatic patients. A count of 6,000 would result from a 10 microlitre loop mistake, and 600,000 is a miscalculation by a factor of ten. A count of 60 ignores the loop volume entirely.",
    "id": 108
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 13,
    "question": "A sputum Gram stain shows 5 polymorphonuclear leukocytes and 30 squamous epithelial cells per low-power field, with mixed bacteria. What is the correct action?",
    "options": {
      "A": "Reject the specimen as unsuitable and request a new lower respiratory tract collection",
      "B": "Culture the specimen normally, because the mixed bacteria prove an active infection",
      "C": "Culture the specimen only on chocolate agar, since the squamous cells would not affect the result",
      "D": "Report the Gram stain only and refrigerate the specimen for later culture if the clinician asks"
    },
    "answer": "A",
    "explanation": "A specimen with many squamous cells and few neutrophils is mostly saliva, so the culture cannot represent the lower respiratory tract, and a new sample should be requested. Mixed flora do not prove infection, since oropharyngeal flora are expected in a poor sample. Chocolate agar alone would not correct a poor specimen. Reporting a stain from an unsuitable specimen and storing it misleads the clinician and wastes resources.",
    "id": 109
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 13,
    "question": "Two of four blood culture bottles from a 74-year-old man with a prosthetic heart valve grow coagulase-negative staphylococci from separate venipuncture sites. How should the laboratory handle this result?",
    "options": {
      "A": "Report it as a probable contaminant, since coagulase-negative staphylococci are skin flora",
      "B": "Identify the organism and test susceptibility, since two sets and a prosthetic valve make it likely to be significant",
      "C": "Discard the isolate, and request a third blood culture before reporting anything to the physician",
      "D": "Treat the bottles as false positives because instruments detect growth only from contaminants"
    },
    "answer": "B",
    "explanation": "The same organism in two separate sets in a patient with a prosthetic device raises the likelihood of true bacteremia and endocarditis, so full identification and susceptibility testing are appropriate. Calling it a contaminant ignores the number of sets and the device. Discarding an isolate and waiting delays care. Instruments detect growth of any organism, not only contaminants, so this statement is simply incorrect.",
    "id": 110
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 13,
    "question": "A technologist is preparing quality control for a MacConkey agar lot. Which pair of organisms best demonstrates both the selective and the differential properties of the medium?",
    "options": {
      "A": "Staphylococcus aureus as a growth control and Escherichia coli as an inhibited control",
      "B": "Haemophilus influenzae as a growth control and Proteus mirabilis as a lactose fermenter",
      "C": "Streptococcus pyogenes as a pink colony and Pseudomonas aeruginosa as a lactose fermenter",
      "D": "Escherichia coli giving pink colonies and Enterococcus faecalis showing inhibition of growth"
    },
    "answer": "D",
    "explanation": "Escherichia coli is a lactose fermenter that produces pink colonies, showing the differential property, and Enterococcus faecalis is inhibited by bile salts and crystal violet, showing the selective one. Staphylococcus aureus is gram-positive and would be inhibited, while E. coli grows, so the roles are reversed. Haemophilus does not grow on MacConkey and Proteus is a nonfermenter. Streptococcus pyogenes would not grow and Pseudomonas is not a lactose fermenter.",
    "id": 111
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 13,
    "question": "A technologist handles a cerebrospinal fluid specimen from a febrile child with neck stiffness. Which handling decision is correct?",
    "options": {
      "A": "Process it immediately at room temperature, and set up the Gram stain and culture without refrigeration",
      "B": "Refrigerate it overnight, because bacteria remain viable better in the cold than at room temperature",
      "C": "Wait for the cell count before opening the tube, then culture only if the white cells are raised",
      "D": "Freeze it at minus 20 degrees Celsius until the clinician confirms that culture is wanted"
    },
    "answer": "A",
    "explanation": "CSF is an emergency specimen, and fastidious meningeal pathogens such as Neisseria meningitidis and Haemophilus lose viability in the cold, so it is processed immediately at room temperature. Overnight refrigeration risks losing the organism. Delaying culture until a cell count is complete postpones the diagnosis. Freezing destroys organisms and cells and would prevent a useful culture or count.",
    "id": 112
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 13,
    "question": "A laboratory collects blood cultures with a contamination rate of 6 percent, most of them coagulase-negative staphylococci in a single bottle. What is the most appropriate response?",
    "options": {
      "A": "Increase the volume of blood only, as underfilling alone explains this contamination pattern",
      "B": "Reduce the incubation time to 48 hours, since extra days of incubation produce more contaminants",
      "C": "Review skin antisepsis, drying time, and collection technique, and educate the collectors",
      "D": "Stop reporting single-bottle isolates, because all single positives are contaminants"
    },
    "answer": "C",
    "explanation": "A rate above about 3 percent with typical skin organisms in single bottles points to collection technique and antisepsis, so these should be audited, with education of the collectors and a drying time that matches the product. Volume affects sensitivity and not contamination. Shortening the incubation reduces sensitivity for true pathogens and does not address the cause. Single positives with organisms such as Staphylococcus aureus are almost always real, so a blanket rule is unsafe.",
    "id": 113
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 13,
    "question": "A culture plate shows colourless colonies on MacConkey agar and black-centred colonies on XLD agar from a stool specimen. Which organism is the best presumptive identification for this pattern?",
    "options": {
      "A": "Escherichia coli, a lactose fermenter that produces hydrogen sulphide",
      "B": "Klebsiella pneumoniae, a mucoid lactose fermenter without hydrogen sulphide production",
      "C": "Pseudomonas aeruginosa, an oxidase-positive organism that produces a green pigment",
      "D": "Salmonella species, a lactose nonfermenter that produces hydrogen sulphide"
    },
    "answer": "D",
    "explanation": "Colourless colonies on MacConkey show that lactose is not fermented, and black centres on XLD show hydrogen sulphide production, which fits Salmonella. Escherichia coli ferments lactose and gives pink colonies. Klebsiella also ferments lactose and does not produce hydrogen sulphide. Pseudomonas is a nonfermenter, but it is not a usual stool pathogen and does not produce black centres on XLD.",
    "id": 114
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 13,
    "question": "A laboratory notes that the temperature of a CO2 incubator has risen to 39 degrees Celsius overnight, and chocolate plates show poor growth of Haemophilus influenzae. What should be done first?",
    "options": {
      "A": "Continue using the incubator, because organisms normally tolerate a few degrees above 35",
      "B": "Remove the plates from use, move cultures to a working incubator, and document the failure and review affected results",
      "C": "Raise the CO2 level to compensate for the extra heat, and repeat the cultures in the same incubator",
      "D": "Switch only the QC organisms to another incubator and leave patient plates in place"
    },
    "answer": "B",
    "explanation": "A temperature excursion of this size can reduce the recovery of fastidious organisms, so the cultures are moved to a working incubator, the incident is documented, and results produced during the excursion are reviewed. Continuing to use it risks false-negative results. Raising CO2 does not offset the heat. Moving only the QC organisms leaves patient cultures exposed to the faulty conditions.",
    "id": 115
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 14,
    "question": "A urine culture from a 22-year-old woman with symptoms of cystitis grows a coagulase-negative, catalase-positive gram-positive coccus at 100,000 CFU/mL. Which test best identifies the likely species?",
    "options": {
      "A": "Optochin susceptibility, because the organism is probably a pneumococcus that has been misclassified",
      "B": "PYR hydrolysis, because only enterococci can cause cystitis at this colony count",
      "C": "Bacitracin susceptibility, since group A streptococci are the usual urine isolates in young women",
      "D": "Novobiocin susceptibility, since resistance identifies Staphylococcus saprophyticus among the coagulase-negative staphylococci"
    },
    "answer": "D",
    "explanation": "Staphylococcus saprophyticus is a common cause of uncomplicated cystitis in young women, and it is separated from other coagulase-negative staphylococci by resistance to novobiocin. Optochin and bacitracin are used for streptococci, which are catalase negative, so they do not apply to a catalase-positive coccus. PYR is a test for enterococci and group A streptococci, and enterococci are not the only cause of cystitis.",
    "id": 116
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 14,
    "question": "A gram-positive coccus in chains from a throat swab is catalase negative and shows beta hemolysis. It gives a zone of inhibition around a 0.04 unit bacitracin disk and is PYR positive. What is the most likely identification?",
    "options": {
      "A": "Streptococcus agalactiae, because it is CAMP positive and hydrolyzes hippurate",
      "B": "Streptococcus pyogenes, because it is bacitracin susceptible and PYR positive",
      "C": "Enterococcus faecalis, because it is PYR positive and grows in 6.5 percent sodium chloride",
      "D": "Streptococcus pneumoniae, because it is alpha hemolytic and sensitive to optochin"
    },
    "answer": "B",
    "explanation": "Beta hemolysis with bacitracin susceptibility and a positive PYR test fits Streptococcus pyogenes, the group A organism. Streptococcus agalactiae is PYR negative and bacitracin resistant, with CAMP and hippurate positivity. Enterococcus faecalis is not usually beta hemolytic and is identified by salt tolerance and bile-esculin. Streptococcus pneumoniae is alpha hemolytic, so it is not consistent with the description.",
    "id": 117
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 14,
    "question": "A gram-negative rod from a stool culture is colourless on MacConkey agar and gives an alkaline slant, acid butt, and blackening on triple sugar iron agar. The organism is oxidase negative. Which genus is most likely?",
    "options": {
      "A": "Shigella, which ferments glucose only and produces no hydrogen sulphide",
      "B": "Pseudomonas, which gives an alkaline slant and alkaline butt with a positive oxidase test",
      "C": "Salmonella, which ferments glucose only and produces hydrogen sulphide",
      "D": "Escherichia coli, which ferments lactose and gives pink colonies on MacConkey agar"
    },
    "answer": "C",
    "explanation": "An alkaline slant with an acid butt and blackening shows glucose fermentation without lactose fermentation and hydrogen sulphide production, which is the typical Salmonella pattern. Shigella gives the same slant and butt but no blackening. Pseudomonas is oxidase positive and gives no acid in the butt. Escherichia coli is a lactose fermenter, so it would give an acid slant and pink colonies.",
    "id": 118
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 14,
    "question": "A blood culture from a patient with a prosthetic valve grows a gram-positive coccus that is catalase negative, bile-esculin positive, and grows in 6.5 percent sodium chloride. Which test result would most strongly suggest vancomycin resistance mediated by vanA?",
    "options": {
      "A": "Growth on a vancomycin screening agar and resistance to teicoplanin as well",
      "B": "A zone of inhibition around a vancomycin disk that is larger than 17 mm",
      "C": "Susceptibility to ampicillin and a negative PYR reaction on the isolate",
      "D": "Growth on bile-esculin agar at 35 degrees Celsius with a positive catalase test"
    },
    "answer": "A",
    "explanation": "The organism is an enterococcus, and the vanA phenotype gives high-level resistance to both vancomycin and teicoplanin, detected by growth on a vancomycin screening agar. A large zone around a vancomycin disk indicates susceptibility. Ampicillin susceptibility and a negative PYR reaction say nothing about vancomycin resistance, and a PYR negative result would not fit an enterococcus. Bile-esculin growth defines the group, and catalase is negative in enterococci.",
    "id": 119
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 14,
    "question": "A small gram-negative coccobacillus grows on chocolate agar but not on blood agar, except as tiny colonies near a Staphylococcus aureus streak. Which factors does it need for growth?",
    "options": {
      "A": "V factor only, since hemin is supplied by the sheep blood in the medium",
      "B": "X factor and V factor, since the satellite growth shows that NAD from the staphylococci is used",
      "C": "X factor only, since NAD is made by all gram-negative rods",
      "D": "Neither factor, since the organism fails to grow because of the lack of carbon dioxide"
    },
    "answer": "B",
    "explanation": "Haemophilus influenzae needs both hemin (X factor) and NAD (V factor). Chocolate agar provides both, and blood agar supplies X factor but its enzymes destroy free V factor, and the staphylococcal colonies release NAD, giving the satellite phenomenon. The claim that V alone is needed ignores the X requirement. The statement that NAD is made by all gram-negative rods is false for this genus, and carbon dioxide alone does not explain the pattern.",
    "id": 120
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 14,
    "question": "A gram-negative rod is oxidase positive, produces a sweet grape-like odour with a blue-green pigment, and grows at 42 degrees Celsius. A patient with cystic fibrosis has mucoid colonies of this organism. Which statement is most accurate?",
    "options": {
      "A": "The organism is an Enterobacterales member that ferments lactose on MacConkey agar",
      "B": "The organism is Stenotrophomonas, and trimethoprim-sulfamethoxazole is the expected active agent",
      "C": "The organism is Acinetobacter, which is oxidase negative and causes dry-surface outbreaks",
      "D": "The organism is Pseudomonas aeruginosa, and the mucoid phenotype reflects alginate overproduction"
    },
    "answer": "D",
    "explanation": "Oxidase positivity, grape odour, pyocyanin, and growth at 42 degrees Celsius identify Pseudomonas aeruginosa, and mucoid strains in cystic fibrosis overproduce alginate. Enterobacterales are oxidase negative and ferment glucose. Stenotrophomonas is oxidase negative, with a lavender-green colony and an ammonia odour. Acinetobacter is oxidase negative and does not produce pyocyanin.",
    "id": 121
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 14,
    "question": "A gram-positive rod from CSF in a newborn is catalase positive, beta-hemolytic, and shows tumbling motility at 25 degrees Celsius. Which organism is most likely, and which exposure is classic?",
    "options": {
      "A": "Listeria monocytogenes, from maternal exposure to contaminated food during pregnancy",
      "B": "Corynebacterium diphtheriae, from a respiratory infection in a close contact at the nursery",
      "C": "Bacillus cereus, from rice that was left at room temperature before the delivery",
      "D": "Clostridium tetani, from contamination of the umbilical stump with soil spores"
    },
    "answer": "A",
    "explanation": "A catalase-positive, beta-hemolytic gram-positive rod with tumbling motility is Listeria monocytogenes, which causes neonatal meningitis after maternal infection with contaminated food. Corynebacterium diphtheriae is nonmotile and not beta hemolytic. Bacillus cereus is a spore-forming, motile rod that causes food poisoning and not neonatal meningitis. Clostridium tetani is an anaerobe that causes tetanus through toxin and would not be recovered from CSF in this way.",
    "id": 122
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 14,
    "question": "A laboratory isolates an Enterobacterales organism that is resistant to ceftriaxone and aztreonam, with a larger zone around ceftazidime when clavulanate is added, but susceptible to meropenem. What mechanism does this support?",
    "options": {
      "A": "A carbapenemase such as KPC, which would also produce resistance to meropenem",
      "B": "An inducible chromosomal AmpC, which is not inhibited by clavulanate",
      "C": "An extended-spectrum beta-lactamase, which is inhibited by clavulanate and spares carbapenems",
      "D": "A mecA-encoded altered penicillin-binding protein, which is found only in staphylococci"
    },
    "answer": "C",
    "explanation": "Resistance to third-generation cephalosporins and aztreonam with restoration of activity by clavulanate and with carbapenem susceptibility is the profile of an ESBL. A carbapenemase would cause meropenem resistance. AmpC enzymes are not inhibited by clavulanate, so there would be no enhanced zone. The mecA gene is found in staphylococci and does not occur in Enterobacterales.",
    "id": 123
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 15,
    "question": "A technologist prepares an inoculum for disk diffusion that is visibly denser than a 0.5 McFarland standard. What effect on the zone sizes is expected, and what result is most likely to be reported incorrectly?",
    "options": {
      "A": "Smaller zones, so that a susceptible organism may be reported as resistant to the drug",
      "B": "Larger zones, so that a resistant organism may be reported as susceptible to the drug",
      "C": "Larger zones for beta-lactams only, so that cephalosporin susceptibility is falsely overestimated",
      "D": "No change in zone sizes, since the disk concentration alone determines the zone diameter"
    },
    "answer": "A",
    "explanation": "An inoculum denser than 0.5 McFarland means more organisms need to be inhibited, and the drug concentration at the point of inhibition is reached closer to the disk, so zones shrink and a susceptible isolate could be falsely reported as resistant. Larger zones come from a light inoculum. Restricting the effect to beta-lactams is wrong because the effect applies to all drugs. Disk concentration is fixed, but the zone depends on inoculum, medium, and incubation as well.",
    "id": 124
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 15,
    "question": "A laboratory finds that Staphylococcus aureus is resistant to erythromycin, appears susceptible to clindamycin, and shows flattening of the clindamycin zone next to the erythromycin disk. How should clindamycin be reported?",
    "options": {
      "A": "Susceptible, because the zone diameter around the clindamycin disk meets the breakpoint",
      "B": "Intermediate, since the flattened zone indicates borderline activity of the drug",
      "C": "Resistant, because the D-test shows inducible clindamycin resistance through the erm gene",
      "D": "Not reported, because a D-test is meant only for gram-negative rods"
    },
    "answer": "C",
    "explanation": "Flattening of the clindamycin zone adjacent to erythromycin is a positive D-test, which shows inducible erm-mediated resistance, and the isolate should be reported as resistant to clindamycin. Reporting susceptible would risk therapeutic failure from selection of constitutive mutants. Intermediate does not describe an inducible mechanism. The D-test is used for staphylococci and beta-hemolytic streptococci, not for gram-negative rods.",
    "id": 125
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 15,
    "question": "A Klebsiella pneumoniae isolate is resistant to ceftriaxone and aztreonam, and the ceftazidime-clavulanate disk shows a zone 8 mm larger than ceftazidime alone. Meropenem is susceptible. What is the best interpretation?",
    "options": {
      "A": "A carbapenemase producer, because clavulanate would not otherwise change the zone size",
      "B": "An ESBL producer, because clavulanate restores the activity of the cephalosporin",
      "C": "An AmpC producer, because enlargement of the zone shows enzyme induction by the drug",
      "D": "Intrinsic resistance, because Klebsiella is always resistant to third-generation cephalosporins"
    },
    "answer": "B",
    "explanation": "A zone increase of 5 mm or more with clavulanate confirms an ESBL, and carbapenem susceptibility is expected. A carbapenemase would cause meropenem resistance, and clavulanate does not restore activity against most carbapenemases. AmpC enzymes are not inhibited by clavulanate, so the zone would not enlarge. Klebsiella is intrinsically resistant to ampicillin, not to third-generation cephalosporins.",
    "id": 126
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 15,
    "question": "Weekly QC for trimethoprim-sulfamethoxazole shows that the Enterococcus faecalis ATCC 29212 zone is smaller than the acceptable range, while other drugs are in range. Which cause should be investigated first?",
    "options": {
      "A": "The McFarland standard was set too low, which would affect all drugs equally",
      "B": "The incubation temperature was too low, which would enlarge all of the zones",
      "C": "The agar was poured too thin, which would reduce all zones for every antimicrobial",
      "D": "The Mueller-Hinton lot has excess thymidine, which antagonizes the folate pathway inhibitors"
    },
    "answer": "D",
    "explanation": "Thymidine in the medium allows organisms to bypass folate inhibition, so trimethoprim-sulfamethoxazole zones shrink while other drugs are unaffected, and Enterococcus faecalis ATCC 29212 is used specifically to check the thymidine content of the medium. A low McFarland value, thin agar, or low temperature would change all of the drugs together, not a single combination.",
    "id": 127
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 15,
    "question": "A technologist reads a trimethoprim-sulfamethoxazole zone and sees faint growth, about 15 percent of the lawn, inside an otherwise clear zone. How should the zone be measured?",
    "options": {
      "A": "Measure the outer edge of the faint growth as the zone boundary",
      "B": "Report the isolate as resistant because any growth in the zone is meaningful",
      "C": "Ignore the slight growth and measure the edge of the obvious inhibition",
      "D": "Repeat the test with a lighter inoculum so that the faint growth disappears"
    },
    "answer": "C",
    "explanation": "For trimethoprim-sulfamethoxazole, slight growth of up to about 20 percent is disregarded, and the zone edge is read at the point of marked inhibition. Measuring the outer boundary of faint growth would make the zone too small. Calling the isolate resistant on the basis of faint growth contradicts the reading rule. Changing the inoculum to get a different appearance is not a correct practice and would violate the standardization.",
    "id": 128
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 15,
    "question": "An Enterobacter cloacae isolate from a blood culture is susceptible to ceftriaxone on initial testing. After 5 days of treatment with ceftriaxone, a repeat blood culture grows the same species resistant to ceftriaxone. What is the most likely explanation?",
    "options": {
      "A": "Selection of derepressed chromosomal AmpC mutants during therapy with the third-generation cephalosporin",
      "B": "Acquisition of vanA from a bystander enterococcus in the gut during the treatment",
      "C": "Production of a metallo-beta-lactamase that is inhibited by clavulanate in the laboratory",
      "D": "A change in the inoculum density, which makes resistance appear only in the repeat culture"
    },
    "answer": "A",
    "explanation": "Enterobacter, Citrobacter, and Serratia carry inducible chromosomal AmpC, and therapy with a third-generation cephalosporin can select derepressed mutants, so a susceptible isolate becomes resistant. The vanA gene gives glycopeptide resistance in enterococci and has no role in cephalosporin resistance in gram-negatives. Metallo-beta-lactamases are not inhibited by clavulanate. Inoculum density affects a single test but does not explain a true resistance change in the patient.",
    "id": 129
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 15,
    "question": "A cumulative antibiogram is being built for the year. Which approach follows recommended practice?",
    "options": {
      "A": "Include every isolate from each patient, since repeated isolates show the persistence of resistance",
      "B": "Include screening swabs for MRSA, since they are the most clinically relevant specimens",
      "C": "Report percentages for any species, even when fewer than ten isolates were tested",
      "D": "Count only the first isolate per patient per period and report species with at least 30 isolates"
    },
    "answer": "D",
    "explanation": "Standard guidance counts one isolate per patient per period to avoid bias from repeated sampling, and requires at least 30 isolates for a valid percentage. Including all isolates overweights patients with prolonged infections. Screening cultures are not clinical isolates and are excluded. Percentages from fewer than ten isolates are statistically unstable and should not be published.",
    "id": 130
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 15,
    "question": "A carbapenem-resistant Klebsiella pneumoniae is tested with the modified carbapenem inactivation method and with the addition of EDTA, and the result is positive for mCIM but negative for eCIM. What mechanism is suggested?",
    "options": {
      "A": "A metallo-beta-lactamase such as NDM, because EDTA would inhibit it and restore the zone",
      "B": "A serine carbapenemase such as KPC, because EDTA does not inhibit it",
      "C": "An ESBL with porin loss, because EDTA stops the production of the enzyme",
      "D": "A mecA-encoded altered target, because EDTA inhibits the penicillin-binding protein"
    },
    "answer": "B",
    "explanation": "A positive mCIM shows that carbapenem is inactivated, and a negative eCIM, meaning that EDTA does not abolish the activity, indicates a serine carbapenemase such as KPC or OXA-48 rather than a zinc-dependent metallo-beta-lactamase. A metallo-beta-lactamase would be inhibited by EDTA and the eCIM would be positive. An ESBL does not hydrolyze carbapenems enough to give a positive mCIM. The mecA gene occurs in staphylococci and is not detected this way.",
    "id": 131
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 16,
    "question": "A culture from a blood bottle shows budding yeast that forms short outgrowths without constriction when incubated in serum for 2 hours at 37 degrees Celsius. It grows at 42 degrees Celsius and 45 degrees Celsius. What is the most likely identification?",
    "options": {
      "A": "Candida glabrata, because it grows at high temperatures and does not form germ tubes",
      "B": "Candida albicans, because a positive germ tube test with growth at 45 degrees Celsius identifies it",
      "C": "Candida dubliniensis, because it forms germ tubes and fails to grow at 45 degrees Celsius",
      "D": "Cryptococcus neoformans, because it is encapsulated and forms short tubes in serum"
    },
    "answer": "B",
    "explanation": "A positive germ tube test points to Candida albicans or Candida dubliniensis, and growth at 45 degrees Celsius separates albicans from dubliniensis. Candida glabrata does not form germ tubes. Candida dubliniensis does not grow at 45 degrees Celsius, so this organism cannot be dubliniensis. Cryptococcus neoformans does not form germ tubes or pseudohyphae and is distinguished by its capsule and urease activity.",
    "id": 132
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 16,
    "question": "A CSF specimen from a patient with HIV and headache shows large budding yeast cells with clear halos on an India ink preparation. Which additional test is most sensitive for confirming the diagnosis?",
    "options": {
      "A": "Cryptococcal antigen testing on CSF and serum by lateral flow or latex agglutination",
      "B": "A Gram stain of the CSF, because yeast cells are always gram-negative",
      "C": "Galactomannan antigen testing, because it detects Cryptococcus capsule polysaccharide",
      "D": "A germ tube test on the CSF, since Cryptococcus forms germ tubes in serum"
    },
    "answer": "A",
    "explanation": "Cryptococcal antigen detection has a sensitivity above 90 percent and is the preferred rapid test, and it is more sensitive than India ink, which misses cases with low burden. Yeasts stain gram-positive, not gram-negative. Galactomannan detects Aspergillus and other fungi, not the Cryptococcus capsule, which is glucuronoxylomannan. A germ tube test identifies Candida albicans and is negative for Cryptococcus.",
    "id": 133
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 16,
    "question": "A KOH mount of a sinus biopsy from a patient with diabetic ketoacidosis shows broad, ribbon-like hyphae with rare septa and branching at right angles. What is the most appropriate action?",
    "options": {
      "A": "Wait for the culture to grow, since direct microscopy cannot suggest a group of fungi",
      "B": "Report as a probable Aspergillus and recommend voriconazole as first-line therapy",
      "C": "Report as a mold contaminant, since broad hyphae are common in specimens of nasal passages",
      "D": "Phone the result as probable Mucorales infection at once, because treatment and surgery must begin quickly"
    },
    "answer": "D",
    "explanation": "Broad, ribbon-like, pauciseptate hyphae branching at right angles are typical of the Mucorales, and mucormycosis in a ketoacidotic patient is a medical emergency that needs urgent amphotericin B and debridement. Waiting for culture wastes critical time. Aspergillus has narrow, septate hyphae with acute-angle branching, and voriconazole is not active against Mucorales. A sinus biopsy with these hyphae is not a contaminant.",
    "id": 134
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 16,
    "question": "A thick blood film from a febrile traveller shows 120 parasites per 200 white blood cells counted. Assuming a white cell count of 8,000 per microlitre, what is the parasite density?",
    "options": {
      "A": "480 parasites per microlitre",
      "B": "9,600 parasites per microlitre",
      "C": "4,800 parasites per microlitre",
      "D": "960 parasites per microlitre"
    },
    "answer": "C",
    "explanation": "The density is the number of parasites per white cell multiplied by the white cell count, so 120 divided by 200 is 0.6, and 0.6 times 8,000 is 4,800 per microlitre. A value of 480 loses a factor of ten. A value of 9,600 would result from doubling the ratio by dividing by 100 instead of 200. A value of 960 results from misplacing a decimal point in the ratio.",
    "id": 135
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 16,
    "question": "A stool concentrate shows cysts that are oval, with four nuclei and visible axonemes, while a fresh wet mount shows pear-shaped trophozoites with a \"falling leaf\" motion. Which organism is the most likely?",
    "options": {
      "A": "Giardia duodenalis, which has binucleate trophozoites with a sucker disk",
      "B": "Entamoeba histolytica, which has trophozoites that contain ingested red blood cells",
      "C": "Cryptosporidium parvum, which has oocysts that stain red by the modified acid-fast method",
      "D": "Entamoeba coli, which has cysts that contain up to eight nuclei"
    },
    "answer": "A",
    "explanation": "Pear-shaped trophozoites with falling-leaf motility and oval four-nucleate cysts with axonemes identify Giardia duodenalis. Entamoeba histolytica trophozoites are ameboid and do not show this motility, and its cysts have blunt chromatoid bars. Cryptosporidium forms small oocysts, not cysts with four nuclei. Entamoeba coli cysts have up to eight nuclei and no axonemes.",
    "id": 136
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 16,
    "question": "A dermatophyte culture grows as a white cottony colony with a deep red reverse, and microscopy shows slender, pencil-shaped microconidia along the hyphae. The infection is from the feet and nails. What is the likely species?",
    "options": {
      "A": "Microsporum canis, since it has spindle-shaped macroconidia and fluoresces under a Wood lamp",
      "B": "Epidermophyton floccosum, since it has club-shaped macroconidia and no microconidia",
      "C": "Trichophyton mentagrophytes, since it has round microconidia in clusters and spiral hyphae",
      "D": "Trichophyton rubrum, the most common cause of tinea pedis and onychomycosis"
    },
    "answer": "D",
    "explanation": "A white, cottony colony with a red reverse and small, pencil-shaped microconidia fits Trichophyton rubrum, the commonest cause of foot and nail infection. Microsporum canis has spindle-shaped, thick-walled macroconidia and is acquired from pets. Epidermophyton has no microconidia. Trichophyton mentagrophytes has round microconidia in grape-like clusters and spiral hyphae, so it does not match.",
    "id": 137
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 16,
    "question": "A returning traveller has a negative malaria smear and a negative rapid test on the first sample, but remains febrile after a trip to West Africa. What is the correct next step?",
    "options": {
      "A": "Exclude malaria, since a thick and thin film performed correctly rules out the diagnosis",
      "B": "Repeat the HRP2 test only, because it is more sensitive than microscopy at low parasitemia",
      "C": "Repeat thick and thin films at 12 to 24 hour intervals for a total of three sets",
      "D": "Culture the blood on Sabouraud agar to detect Plasmodium after seven days"
    },
    "answer": "C",
    "explanation": "One negative film does not exclude malaria, because parasitemia fluctuates, and three sets of films at 12 to 24 hour intervals are needed. Excluding malaria after a single negative result risks missing a falciparum infection. The HRP2 test is not more sensitive than expert microscopy at low parasitemia, and may be negative with hrp2 deletions. Plasmodium cannot be cultured on Sabouraud agar, which is a fungal medium.",
    "id": 138
  },
  {
    "domain": "clinical_microbiology",
    "chapter": 16,
    "question": "A patient is HBsAg negative, anti-HBs positive, and anti-HBc IgG positive, with IgM anti-HBc negative. What is the most accurate interpretation?",
    "options": {
      "A": "Chronic hepatitis B infection with active viral replication and high infectivity",
      "B": "Resolved past hepatitis B infection with immunity",
      "C": "Immunity from vaccination only, since the anti-HBc is a nonspecific marker",
      "D": "Acute hepatitis B in the window period, since IgM anti-HBc was not requested"
    },
    "answer": "B",
    "explanation": "Clearance of the surface antigen, positive anti-HBs, and anti-HBc IgG indicate recovery from past infection with immunity. Chronic infection would show persistent HBsAg. Vaccination produces anti-HBs alone, without anti-HBc, because the vaccine contains only surface antigen. The window period has IgM anti-HBc positive and the IgM was reported negative here, so acute infection is not supported.",
    "id": 139
  },
  {
    "domain": "histology",
    "chapter": 17,
    "question": "A technologist receives a large breast resection specimen for a patient with a new cancer diagnosis. The surgeon's note shows the specimen was removed at 08:00 but placed into formalin at 11:45. Which action best protects the quality of the hormone receptor results?",
    "options": {
      "A": "Record the cold ischemia time on the requisition so interpretation can account for possible under-fixation.",
      "B": "Discard the specimen and request that the patient return for a repeat surgical collection to correct the delay.",
      "C": "Transfer the specimen into fresh Bouin solution for four hours before changing it back into neutral buffered formalin.",
      "D": "Place the specimen directly into absolute ethanol to stop all autolysis quickly before it goes into formalin."
    },
    "answer": "A",
    "explanation": "Documenting the interval between removal and fixation is the right step, because prolonged cold ischemia can weaken receptor staining and the pathologist needs that information when interpreting a negative result. Asking for a repeat operation is disproportionate and not clinically justified for a delay of this kind. Bouin solution contains picric and acetic acids, damages nucleic acids, and is not an accepted rescue fixative for receptor testing. Absolute ethanol dehydrates and shrinks the tissue and would alter its antigenicity, so it should not be used as an emergency step before formalin.",
    "id": 140
  },
  {
    "domain": "histology",
    "chapter": 17,
    "question": "A histology laboratory prepares 10 percent neutral buffered formalin from a stock bottle labelled 40 percent formaldehyde. A technologist must make 8 litres of working solution containing 4 percent formaldehyde. How much stock and how much water should be used?",
    "options": {
      "A": "400 mL of stock formaldehyde mixed with 7.6 litres of distilled water.",
      "B": "1.6 litres of stock formaldehyde mixed with 6.4 litres of distilled water.",
      "C": "800 mL of stock formaldehyde mixed with 7.2 litres of distilled water.",
      "D": "80 mL of stock formaldehyde mixed with 7.92 litres of distilled water."
    },
    "answer": "C",
    "explanation": "The working solution must be 4 percent formaldehyde, so the dilution factor from a 40 percent stock is ten, which means one part stock to nine parts water; for 8 litres that is 800 mL of stock plus 7.2 litres of water. Using 400 mL gives only 2 percent formaldehyde, which fixes too slowly. Using 1.6 litres gives 8 percent, which is stronger than intended and hardens tissue excessively. Using 80 mL gives 0.4 percent, far too weak to fix tissue.",
    "id": 141
  },
  {
    "domain": "histology",
    "chapter": 17,
    "question": "Sections from a spleen specimen show fine, dark brown to black granular deposits scattered across the red pulp and not stained by any special stain for iron. The tissue was fixed in an old, unbuffered formalin solution. What is the most likely identity of the pigment?",
    "options": {
      "A": "Haemosiderin from chronic red cell breakdown, which would stain blue with the Perls reaction.",
      "B": "Formalin pigment, formed by acid formaldehyde reacting with haemoglobin.",
      "C": "Mercury deposits left behind in the spleen by an earlier mercuric chloride fixative.",
      "D": "Carbon pigment that was inhaled and then carried to the spleen by macrophages."
    },
    "answer": "B",
    "explanation": "Acidic, unbuffered formalin oxidizes to formic acid, which reacts with haemoglobin in blood-rich tissue to give a dark brown to black granular acid formaldehyde haematin pigment that does not react in iron stains. Haemosiderin would stain blue with the Perls method, which this pigment does not. Mercury deposits arise only after mercuric fixatives and have a different distribution. Carbon from inhalation is found in lung and hilar nodes and does not explain a pigment in spleen of this kind.",
    "id": 142
  },
  {
    "domain": "histology",
    "chapter": 17,
    "question": "A pathologist asks for a decalcification method for a small bone biopsy that will also need immunohistochemistry and molecular testing. The laboratory wants to keep antigens and nucleic acids as intact as possible. Which agent is the best choice?",
    "options": {
      "A": "Concentrated nitric acid at room temperature for rapid removal.",
      "B": "Hydrochloric acid at elevated temperature to speed the process.",
      "C": "Ten percent EDTA at neutral pH with regular solution changes.",
      "D": "Picric acid solution followed by a long water wash."
    },
    "answer": "C",
    "explanation": "EDTA removes calcium by chelation at a neutral pH and gives the best preservation of antigens and nucleic acids, at the cost of a longer decalcification time. Nitric acid acts quickly but damages nuclear staining, swells collagen, and degrades DNA. Hot hydrochloric acid is even more destructive and is unsuitable when biomarker testing is planned. Picric acid is a component of Bouin fixative and is not a decalcifying agent, and it hydrolyzes DNA.",
    "id": 143
  },
  {
    "domain": "histology",
    "chapter": 17,
    "question": "A technologist cutting a block from an overnight run finds that it cuts with a gritty, hard feel, sections chip and shatter, and the tissue looks shrunken with clefts around structures. The processor log shows the cycle finished at 02:00 and the cassettes stayed in hot wax until 07:30. What is the most likely explanation?",
    "options": {
      "A": "Under-processing because the dehydration alcohols on the processor were too dilute.",
      "B": "Over-processing from prolonged hot wax exposure after the cycle ended.",
      "C": "Poor fixation because the specimens were too thick when they arrived in the laboratory.",
      "D": "Contamination of the clearing agent with formalin carried over from an earlier station."
    },
    "answer": "B",
    "explanation": "Tissue left in hot wax for hours after the schedule finishes becomes hard and brittle and shrinks, and the block then cuts with a gritty feel and chips. Under-processing gives the opposite picture, a soft, mushy block with crumbling tissue. Thick specimens cause soft centres from poor fixation and infiltration, not uniform brittleness. Formalin carryover into the clearing stage leads to precipitate and inconsistent staining rather than a brittle, shrunken block.",
    "id": 144
  },
  {
    "domain": "histology",
    "chapter": 17,
    "question": "A laboratory protocol requires replacing the 70 percent ethanol station on a tissue processor after 1,500 cassettes. The station was changed this morning and its counter was reset to zero. The laboratory processes about 250 cassettes each night. After how many nights of processing will the protocol require the next change?",
    "options": {
      "A": "Three nights of processing at the current throughput.",
      "B": "Four nights of processing at the current throughput.",
      "C": "Five nights of processing at the current throughput.",
      "D": "Six nights of processing at the current throughput."
    },
    "answer": "D",
    "explanation": "Dividing the limit of 1,500 cassettes by the nightly load of 250 gives six nights, at which point the counter reaches the limit and the reagent must be replaced. Replacing after three, four, or five nights corresponds to dividing by an overestimated nightly throughput, and each would discard usable reagent early and add unnecessary cost without any quality benefit.",
    "id": 145
  },
  {
    "domain": "histology",
    "chapter": 17,
    "question": "A pathologist suspects that formalin-fixed tissue sections from a case contain a foreign extraneous fragment of another patient's tissue on one slide, found only on the section from the third level. Which source is most likely?",
    "options": {
      "A": "A flotation water bath that was not cleaned between cases.",
      "B": "A processing reagent on the instrument that had become diluted with water.",
      "C": "Inadequate fixation of the original specimen before it reached the laboratory.",
      "D": "Tissue shrinkage caused by prolonged dehydration in absolute ethanol during processing."
    },
    "answer": "A",
    "explanation": "Fragments of other patients' tissue, known as floaters, usually come from a flotation bath, forceps, or other shared equipment that was not cleaned between cases, which is why bath surfaces are skimmed and changed after each case. A diluted reagent changes infiltration and consistency, not the identity of the tissue on a slide. Poor fixation at the surgical site changes preservation quality, not the origin of tissue. Shrinkage from dehydration produces clefts and distortion in the patient's own tissue.",
    "id": 146
  },
  {
    "domain": "histology",
    "chapter": 17,
    "question": "A busy laboratory notices that the rate of soft, poorly processed blocks has risen from 1 percent to 6 percent over two months, and every affected block came from the same instrument. Which first step is most appropriate in a systematic investigation?",
    "options": {
      "A": "Retrain all grossing staff on how to wrap very small biopsies in lens paper.",
      "B": "Replace the fixative supplier immediately, without any supporting data on the old lot.",
      "C": "Review reagent logs, schedules, loads, and maintenance records for that instrument.",
      "D": "Extend every processing schedule on all instruments by four hours as a general precaution."
    },
    "answer": "C",
    "explanation": "A fault confined to one instrument points first to that instrument's own records of reagent changes, programmed schedule, basket loads, and maintenance, and reviewing them follows the data to the cause. Retraining grossing staff addresses a step shared by all instruments and would not explain the pattern. Changing the fixative supplier without evidence is a costly guess that ignores the clue. Lengthening every schedule risks over-processing on instruments that are working correctly.",
    "id": 147
  },
  {
    "domain": "histology",
    "chapter": 18,
    "question": "A technologist is embedding a punch biopsy of skin that has been bisected along its length. The pathologist needs to see epidermis, dermis, and subcutis in the same section. How should the two halves be placed in the mould?",
    "options": {
      "A": "Flat on their sides with the cut surfaces facing upward away from the mould base.",
      "B": "Standing on their cut surfaces with the cut faces down at the base of the mould.",
      "C": "Stacked on top of each other with the epidermal surfaces in contact in the middle.",
      "D": "Placed loosely at the top of the wax so that the cassette covers them."
    },
    "answer": "B",
    "explanation": "Placing the cut faces against the base of the mould means the first sections cut across the full thickness of the biopsy and show all layers together. Laying the pieces flat with the cut face upward would cut through the epidermis at the surface and miss deeper layers in the early sections. Stacking the halves with epidermis touching hides the surface and overlaps the tissue. Leaving the pieces at the top of the wax produces a block in which the tissue is not in one plane and is hard to face.",
    "id": 148
  },
  {
    "domain": "histology",
    "chapter": 18,
    "question": "During sectioning of a block, a technologist sees regular parallel bands of alternating thick and thin staining running across every section, perpendicular to the cutting direction. Which should be checked and corrected first?",
    "options": {
      "A": "The hematoxylin lot number, together with the date on which it was prepared.",
      "B": "The temperature of the flotation water bath and the cleanliness of its surface.",
      "C": "The pH of the eosin counterstain and the amount of acetic acid it contains.",
      "D": "Tightness of the blade, holder, block, and chuck."
    },
    "answer": "D",
    "explanation": "Alternating thick and thin bands are chatter, caused by vibration, so the loose blade, holder, chuck, or block is the first thing to tighten, followed by clearance angle and blade condition. The hematoxylin lot would affect colour but not section thickness. The water bath temperature affects folds and spreading after the section is cut, not banding in the cut itself. Eosin pH alters the intensity of pink staining and has no relation to thickness variation.",
    "id": 149
  },
  {
    "domain": "histology",
    "chapter": 18,
    "question": "A laboratory prepares a differentiating solution of 1 percent acid alcohol, using concentrated hydrochloric acid and 70 percent ethanol. How much concentrated acid is needed to make 500 mL of the solution?",
    "options": {
      "A": "5 mL of concentrated hydrochloric acid added to 495 mL of 70 percent ethanol.",
      "B": "50 mL of concentrated hydrochloric acid added to 450 mL of 70 percent ethanol.",
      "C": "1 mL of concentrated hydrochloric acid added to 499 mL of 70 percent ethanol.",
      "D": "25 mL of concentrated hydrochloric acid added to 475 mL of 70 percent ethanol."
    },
    "answer": "A",
    "explanation": "A 1 percent solution by volume needs 1 mL of acid per 100 mL of final volume, so 500 mL needs 5 mL of acid plus 495 mL of alcohol. Using 50 mL would give a 10 percent acid solution that would strip hematoxylin from nuclei within seconds. Using 1 mL gives a 0.2 percent solution, which differentiates too weakly. Using 25 mL gives 5 percent, which would also over-differentiate rapidly and destroy nuclear detail.",
    "id": 150
  },
  {
    "domain": "histology",
    "chapter": 18,
    "question": "After H&E staining, a pathologist reports that nuclei are reddish-brown and indistinct while the eosin looks normal. The stain was a regressive hematoxylin method with acid alcohol differentiation. Which step was most likely inadequate?",
    "options": {
      "A": "Dehydration in absolute ethanol after the eosin stage was too short for clarity.",
      "B": "Deparaffinization in xylene before hydration was extended far too long in this run.",
      "C": "Bluing after differentiation did not convert the lake to its blue form.",
      "D": "The mounting medium had a refractive index differing from that of glass."
    },
    "answer": "C",
    "explanation": "Red-brown nuclei are the acid form of the hematoxylin lake, which turns blue-purple only after exposure to a weak alkali, so failed bluing is the usual cause. Short dehydration after eosin would leave milky slides and cloudiness under the coverslip. Extended xylene before hydration does not change nuclear colour. A mismatched mounting medium reduces clarity and contrast but does not shift nuclei from blue to brown.",
    "id": 151
  },
  {
    "domain": "histology",
    "chapter": 18,
    "question": "A technologist finds blue-black granular precipitate lying on the surface of several sections across different cases on the same day. The nuclei underneath are well stained. What is the most likely cause?",
    "options": {
      "A": "An excessively long time in the eosin solution during the counterstain step.",
      "B": "Insufficient hydration of the sections before they entered the hematoxylin.",
      "C": "Unfiltered hematoxylin carrying oxidized dye particles onto slides.",
      "D": "A coverslipping medium that was too thin when it was applied."
    },
    "answer": "C",
    "explanation": "Oxidized dye particles and metallic sheen form in hematoxylin that has aged or has not been filtered, and they settle on sections as a granular blue-black deposit, so filtering daily is the usual preventive step. Too long in eosin deepens pink colour without creating particles. Poor hydration causes patchy uptake of the nuclear stain rather than a surface precipitate. A thin mountant causes air bubbles or drying at the edges and does not form dark particles.",
    "id": 152
  },
  {
    "domain": "histology",
    "chapter": 18,
    "question": "A needle biopsy core has a thickness of 1.2 mm in the cutting direction and the laboratory cuts 4 micrometre sections. The technologist faces 15 sections off the block before the tissue is fully exposed. Approximately how many diagnostic sections remain in the core, ignoring tissue lost at the very end?",
    "options": {
      "A": "About 285 sections remain for diagnostic work after facing.",
      "B": "About 300 sections remain, ignoring the sections lost during facing.",
      "C": "About 240 sections remain, assuming a larger number was lost in facing.",
      "D": "About 135 sections remain, assuming sections of double the stated thickness."
    },
    "answer": "A",
    "explanation": "A thickness of 1.2 mm is 1,200 micrometres, which at 4 micrometres per section gives 300 sections in total, and removing 15 during facing leaves about 285. The figure of 300 ignores the sections lost in facing. A figure of 240 assumes a larger number was wasted than the question states, and 135 would result from using an 8 micrometre section thickness, double the stated value.",
    "id": 153
  },
  {
    "domain": "histology",
    "chapter": 18,
    "question": "A laboratory notices that sections from a processed lymph node block repeatedly disintegrate on the flotation bath into small fragments and the nuclei look shrunken on the slides that survive. The water bath thermometer reads 58 degrees Celsius and the paraffin melts at 56 degrees. What is the best corrective action?",
    "options": {
      "A": "Increase the section thickness to 10 micrometres to give the sections extra strength.",
      "B": "Add detergent to the water to improve surface tension.",
      "C": "Replace the water in the bath daily but keep the same temperature.",
      "D": "Lower the bath to about 45 degrees Celsius and refloat sections."
    },
    "answer": "D",
    "explanation": "The bath is above the melting point of the wax, so the section melts and breaks apart; setting it 5 to 10 degrees below the melting point, about 45 to 50 degrees, flattens sections without melting them. Thicker sections would still melt and would not give the thin sections needed for diagnosis. Detergent weakens surface tension and prevents sections from floating and spreading properly. Changing the water without changing the temperature leaves the cause untouched.",
    "id": 154
  },
  {
    "domain": "histology",
    "chapter": 18,
    "question": "A pathologist complains that eosin staining on a series of slides looks pale and washed out, but nuclei are well stained. The laboratory's stainer log shows that the alcohol stations after the eosin were last changed 2,400 slides ago, against a limit of 800. Which explanation best fits?",
    "options": {
      "A": "The hematoxylin lake was fixed too strongly to the nuclei by a mordant.",
      "B": "The tissue was fixed in a mercury-containing fixative earlier in processing.",
      "C": "The microtome was cutting sections that were too thick for good staining.",
      "D": "Exhausted dehydrating alcohols carrying water removed eosin from the sections."
    },
    "answer": "D",
    "explanation": "Alcohols that have exceeded their change limit hold water carried from earlier stations, and these dilute alcohols strip eosin from the section during dehydration, leaving pale cytoplasm while nuclei remain well stained. Over-fixed hematoxylin would affect nuclei and not the counterstain. Mercury fixation affects trichrome and special stains and would be corrected during processing, not by this log finding. Thick sections tend to stain darker, not paler.",
    "id": 155
  },
  {
    "domain": "histology",
    "chapter": 19,
    "question": "A liver biopsy from a child shows hepatocytes with clear, swollen cytoplasm. A PAS stain gives strong magenta staining in the hepatocytes, and a PAS stain performed after diastase digestion shows no staining in the same cells. What does this pair of results show?",
    "options": {
      "A": "The cytoplasm contains neutral mucin that resists digestion by amylase.",
      "B": "The cytoplasm contains fungal wall polysaccharide that resists enzyme treatment.",
      "C": "The cytoplasmic material is glycogen, which is removed by the diastase.",
      "D": "The cytoplasm contains acid mucin, which is stained only by Alcian blue."
    },
    "answer": "C",
    "explanation": "Glycogen is a PAS-positive polysaccharide that is digested by alpha-amylase, so loss of staining after diastase means that the material was glycogen. Neutral mucin and fungal wall polysaccharide are both PAS-positive but resist diastase, so they would stay magenta in the digested slide. Acid mucin is demonstrated by Alcian blue and is not the PAS-positive component whose staining disappears with enzyme digestion.",
    "id": 156
  },
  {
    "domain": "histology",
    "chapter": 19,
    "question": "A pathologist wants to separate sulphated acid mucins from carboxylated acid mucins in a gastric biopsy. Which method is the most suitable?",
    "options": {
      "A": "Alcian blue performed at pH 2.5 and at pH 1.0 on paired sections.",
      "B": "Masson trichrome performed with aniline blue and light green on sections.",
      "C": "Perls Prussian blue performed after treatment with dilute hydrochloric acid.",
      "D": "Ziehl-Neelsen performed with hot carbol fuchsin and acid alcohol decolorizer."
    },
    "answer": "A",
    "explanation": "At pH 2.5 Alcian blue binds both carboxylated and sulphated mucins, whereas at pH 1.0 only the strongly acidic sulphated groups stain, so the pair separates the two classes. Masson trichrome distinguishes collagen from muscle and does not identify mucin chemistry. Perls reaction detects ferric iron deposits. Ziehl-Neelsen demonstrates acid-fast organisms through their mycolic acid walls and has no role in classifying mucins.",
    "id": 157
  },
  {
    "domain": "histology",
    "chapter": 19,
    "question": "A liver biopsy from a patient with suspected cirrhosis is stained for reticulin. The technologist notes that the control tissue shows only faint grey fibres, and the patient section is nearly unstained. The silver solution was prepared a week ago. What is the most likely cause?",
    "options": {
      "A": "Insufficient hydration of the sections before they were placed in hematoxylin.",
      "B": "Overuse of the eosin counterstain, which has masked the silver deposit.",
      "C": "A section that was cut too thin to hold silver on its surface.",
      "D": "A deteriorated silver solution or a faulty sensitization step."
    },
    "answer": "D",
    "explanation": "Ammoniacal silver is unstable and is generally prepared fresh, and weak staining in the control as well as the patient section points to a failure of the reagent or the oxidation and sensitization steps that prepare the fibres. Hematoxylin hydration is not part of this method. Eosin is not used in the reticulin stain, so it cannot mask the deposit. Sections of normal thickness hold silver well, and thinness would not explain faint staining of the control.",
    "id": 158
  },
  {
    "domain": "histology",
    "chapter": 19,
    "question": "A bone marrow biopsy shows a deposit that stains deep red with Congo red under ordinary light. The pathologist asks for confirmation that the deposit is amyloid. What observation is required?",
    "options": {
      "A": "Black staining of the deposit after treatment with silver nitrate in strong light.",
      "B": "Apple-green birefringence of the Congo red stain under polarized light.",
      "C": "Blue staining of the deposit after exposure to potassium ferrocyanide.",
      "D": "Magenta staining of the deposit that persists after treatment with diastase."
    },
    "answer": "B",
    "explanation": "Amyloid binds Congo red in an ordered beta-pleated arrangement that produces apple-green birefringence under polarized light, and the red colour in ordinary light is not specific. Black staining with silver in light is the von Kossa reaction for calcium salts. Blue staining with ferrocyanide is the Perls reaction for iron. Magenta that survives diastase is the PAS pattern of neutral mucin or fungal wall, not amyloid.",
    "id": 159
  },
  {
    "domain": "histology",
    "chapter": 19,
    "question": "A lung biopsy is stained with Grocott methenamine silver to look for fungi. The slide shows black, sharply defined yeast forms with narrow-based budding on a pale green background. Which step in the method produces the black colour?",
    "options": {
      "A": "Binding of the cationic dye to carboxyl groups in the cell wall.",
      "B": "Oxidation of wall polysaccharide to aldehydes that reduce silver to metal.",
      "C": "Precipitation of ferric ferrocyanide within the organisms after acid treatment.",
      "D": "Retention of crystal violet in a thick peptidoglycan layer of the wall."
    },
    "answer": "B",
    "explanation": "Chromic acid oxidizes fungal wall polysaccharide to aldehydes, which reduce methenamine silver to black metallic silver at the site of the wall. Binding of a cationic dye to carboxyl groups describes Alcian blue. Ferric ferrocyanide is the Prussian blue of the Perls reaction for iron. Retention of crystal violet in peptidoglycan is the principle of the Gram stain for bacteria and is not part of the silver method.",
    "id": 160
  },
  {
    "domain": "histology",
    "chapter": 19,
    "question": "A technologist is preparing a primary antibody for an IHC run. The antibody is supplied as a concentrate with a recommended working dilution of 1 in 250, and 5 mL of working solution is needed. How should it be prepared?",
    "options": {
      "A": "20 microlitres of concentrate added to 4.98 mL of diluent.",
      "B": "25 microlitres of concentrate added to 4.975 mL of diluent.",
      "C": "50 microlitres of concentrate added to 4.95 mL of diluent.",
      "D": "200 microlitres of concentrate added to 4.8 mL of diluent."
    },
    "answer": "A",
    "explanation": "A dilution of 1 in 250 for 5,000 microlitres requires 5,000 divided by 250, or 20 microlitres of concentrate, with the rest made up with diluent. Using 25 microlitres gives about 1 in 200, which is stronger than recommended and raises background. Using 50 microlitres gives about 1 in 100, and 200 microlitres gives about 1 in 25, both far too concentrated and likely to cause nonspecific staining.",
    "id": 161
  },
  {
    "domain": "histology",
    "chapter": 19,
    "question": "A patient's breast biopsy stains negative for oestrogen receptor, and the internal normal ducts in the same section also fail to stain. The external positive control stains well. What is the most appropriate next step?",
    "options": {
      "A": "Report the tumour as oestrogen receptor negative because the external control worked.",
      "B": "Suspect under-fixation and repeat the test on another block.",
      "C": "Increase the antibody concentration five-fold and rerun the same block immediately.",
      "D": "Replace the chromogen with a red alkaline phosphatase system and re-read the slide."
    },
    "answer": "B",
    "explanation": "Normal ducts that fail to stain are an internal control showing that the tissue itself is poorly preserved for this antigen, which points to under-fixation or long cold ischemia, so a result should not be called true negative and testing on another block or specimen is advised. Reporting negative based only on the external control ignores the internal control failure. Increasing antibody concentration would raise background without restoring a lost epitope. Changing chromogen does not address tissue preservation.",
    "id": 162
  },
  {
    "domain": "histology",
    "chapter": 19,
    "question": "An IHC run shows strong brown staining at the edges of every section, fading toward the centre, while the positive control stains evenly. The slides were run on a bench without a humid chamber. What is the most likely explanation?",
    "options": {
      "A": "Antigen retrieval was carried out in a buffer that was too acidic for the epitope.",
      "B": "The primary antibody had been diluted incorrectly by a factor of ten.",
      "C": "Sections partly dried out during incubation, giving an edge artefact.",
      "D": "The hematoxylin counterstain was applied for too long after the chromogen."
    },
    "answer": "C",
    "explanation": "Strong edge staining with weaker staining in the centre is the classic edge artefact from sections drying during incubation, and it occurs when slides are not kept in a humid chamber. A buffer that is too acidic would reduce signal uniformly. A tenfold dilution error would affect the control as well as the patient sections and would produce even over- or under-staining. Prolonged hematoxylin darkens nuclei but does not create a brown edge gradient.",
    "id": 163
  },
  {
    "domain": "histology",
    "chapter": 20,
    "question": "A technologist freezes a large piece of liver in the cryostat on a chuck at room temperature without a heat extractor, and the block takes several minutes to freeze. The sections show numerous round clear holes and distorted nuclei. What is the most likely cause?",
    "options": {
      "A": "Chatter from a loose blade holder in the cryostat chamber during cutting.",
      "B": "Over-fixation of the liver by prolonged contact with formalin before freezing.",
      "C": "Too thick a section cut with the anti-roll plate misaligned.",
      "D": "Ice crystal artefact from slow freezing of a block."
    },
    "answer": "D",
    "explanation": "Slow freezing allows large ice crystals to grow, which push cells apart and leave round holes and distorted nuclei, especially in water-rich tissue such as liver. Chatter from a loose blade produces regular bands of thick and thin staining, not holes. The specimen was fresh, so formalin over-fixation is not involved. A misaligned anti-roll plate and a thick section cause curling and heavy staining, not clear round holes within the tissue.",
    "id": 164
  },
  {
    "domain": "histology",
    "chapter": 20,
    "question": "A cryostat chamber is set at minus 32 degrees Celsius after cutting a fatty breast specimen. The next specimen is a dense lymph node, and its sections crumble and shatter into fragments. What should the technologist do first?",
    "options": {
      "A": "Replace the blade with a new one and reduce the section thickness to 2 micrometres.",
      "B": "Raise the chamber toward minus 20 degrees and let the block equilibrate.",
      "C": "Soak the block in 10 percent formalin for ten minutes before cutting.",
      "D": "Mount the sections on cold slides to prevent them from thawing."
    },
    "answer": "B",
    "explanation": "Dense tissue is brittle at a temperature chosen for fat, so raising the chamber toward minus 20 degrees and waiting for the block to equilibrate is the first and simplest correction. A new blade and thinner sections would not cure the underlying brittleness. Soaking a frozen block in formalin would thaw and damage it. Cold slides prevent the section from thawing flat and increase wrinkles, and they do not address shattering in the cutting step.",
    "id": 165
  },
  {
    "domain": "histology",
    "chapter": 20,
    "question": "A laboratory performed 250 frozen sections in a year. On review of the permanent paraffin sections, the diagnosis differed from the frozen section diagnosis in 5 cases. What is the discordance rate?",
    "options": {
      "A": "Two percent, found by dividing the 5 discordant cases by the 250 frozen sections performed.",
      "B": "Five percent, found by reporting the count of discordant cases directly as a percentage.",
      "C": "Half of one percent, found by placing the decimal point one position too far left.",
      "D": "Twenty percent, found by dividing the total number of frozen sections by the discordant cases."
    },
    "answer": "A",
    "explanation": "The discordance rate is the number of discordant cases divided by the total, which is 5 divided by 250, giving 0.02 or 2 percent. A figure of 5 percent would be obtained by reporting the count itself as a percentage. A figure of 0.5 percent is a decimal placement error. A figure of 20 percent results from dividing the total by the discordant cases and ignoring the scale.",
    "id": 166
  },
  {
    "domain": "histology",
    "chapter": 20,
    "question": "A surgeon requests an urgent frozen section of a brain biopsy from a patient with rapidly progressive dementia, in whom Creutzfeldt-Jakob disease is suspected. What is the best response from the histology laboratory?",
    "options": {
      "A": "Process the specimen as usual using a new blade and clean the cryostat afterward with ethanol.",
      "B": "Cut the specimen after soaking it in 95 percent ethanol for one hour.",
      "C": "Decline the cryostat procedure and follow the infection prevention policy for fixed tissue.",
      "D": "Freeze the block in liquid nitrogen so that any prion is inactivated by cold."
    },
    "answer": "C",
    "explanation": "Prions resist standard disinfection, and a cryostat is hard to decontaminate, so the laboratory should decline a routine frozen section and follow the infection control policy for high-risk tissue, with fixed-tissue examination as the alternative. A new blade and ethanol wipe do not inactivate prions. Soaking in ethanol does not render tissue safe and defeats the purpose of fresh frozen cutting. Freezing preserves prions and does not inactivate them.",
    "id": 167
  },
  {
    "domain": "histology",
    "chapter": 20,
    "question": "Frozen sections stained with a rapid H&E show cloudy, milky areas under the coverslip and unclear nuclear detail on several slides in a row. Fresh hematoxylin has just been prepared. Which is the most likely cause?",
    "options": {
      "A": "Water carried into the dehydrating alcohols and clearing agent.",
      "B": "Insufficient time in the eosin stain at the end of the staining procedure.",
      "C": "A cryostat temperature that was too low for the tissue that was being cut.",
      "D": "A section that was cut too thick for the slide to dry properly afterward."
    },
    "answer": "A",
    "explanation": "Cloudiness under the coverslip means that water has entered the clearing agent, because dehydrating alcohols that have become wet no longer remove water from the section. Short eosin time affects pink intensity but does not cause milky haze. A low cryostat temperature causes shattering during cutting, not cloudiness after staining. A thick section stains darkly but would not by itself produce a milky film under the coverslip.",
    "id": 168
  },
  {
    "domain": "histology",
    "chapter": 20,
    "question": "A dermatologic surgeon sends tissue for lipid demonstration on a frozen section. After staining with Oil Red O, the technologist dehydrates the section in alcohol and mounts it in a xylene-based resin, and the red droplets are lost. What went wrong?",
    "options": {
      "A": "The xylene-based mountant dissolved the dye and lipid, so an aqueous medium was needed.",
      "B": "The hematoxylin counterstain bleached the fat droplets during the final rinsing step.",
      "C": "The section was cut too thin to hold the Oil Red O stain in place.",
      "D": "The tissue was fixed in formalin before staining instead of in cold acetone."
    },
    "answer": "A",
    "explanation": "Alcohol and xylene dissolve lipid and the lysochrome dye along with it, so Oil Red O sections must be mounted in an aqueous medium and never dehydrated or cleared. A hematoxylin counterstain does not bleach fat droplets. Section thinness does not explain loss of dye after mounting. Formalin fixation before an Oil Red O stain is acceptable, since formalin does not dissolve lipid.",
    "id": 169
  },
  {
    "domain": "histology",
    "chapter": 20,
    "question": "A technologist notices that frozen section slides repeatedly show folds and wrinkles, and the sections do not lie flat after thawing onto the slide. The slides are stored in the cryostat chamber until used. Which change is most likely to help?",
    "options": {
      "A": "Switch from an anti-roll plate to cutting with the plate removed completely.",
      "B": "Cut thicker sections of 20 micrometres so that they resist folding.",
      "C": "Lower the chamber temperature by 10 degrees to stiffen the sections further.",
      "D": "Use room-temperature slides so the section thaws and spreads flat."
    },
    "answer": "D",
    "explanation": "A section thaws onto a slide at room temperature and flattens as it melts, whereas a cold slide prevents proper thawing and leaves wrinkles, so room-temperature slides are the usual remedy. Removing the anti-roll plate would make sections curl and fold more. Much thicker sections are harder to flatten and stain heavily. Lowering the temperature further makes sections brittle and does not help them lie flat.",
    "id": 170
  },
  {
    "domain": "histology",
    "chapter": 20,
    "question": "Over one month, a histology laboratory finds that 3 percent of slides have patchy blue haze, all from the afternoon stainer run, and the reagent log shows no replacement of the dehydrating and clearing stations since the previous month. What is the best corrective strategy?",
    "options": {
      "A": "Retrain all technologists in the microtomy procedure and repeat their competency tests.",
      "B": "Introduce a count-based reagent change schedule and replace stations now.",
      "C": "Order a new lot of eosin and discard the current supply immediately.",
      "D": "Increase block cooling time before each cutting session begins at the microtome."
    },
    "answer": "B",
    "explanation": "The haze has a pattern tied to one stainer and to reagents that were never changed, so a count-based change schedule with immediate replacement addresses the cause and is auditable. Retraining in microtomy targets a stage that does not fit the pattern. Replacing eosin alone does not help a problem in dehydrating and clearing stations. Longer block cooling affects sectioning quality, not haze that appears on stained slides.",
    "id": 171
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A technologist receives a batch of conventional cervical smears whose nuclei look enlarged, pale, and smudged with poor chromatin detail, a hazy appearance across the slides. All smears came from the same clinic, and other clinics' smears in the same stain run look normal. What is the most likely cause?",
    "options": {
      "A": "Hematoxylin that was exhausted in the laboratory's stain bath during this run.",
      "B": "Air-drying of the smears before fixation at the collecting clinic.",
      "C": "Overly long exposure of the smears to the Orange G counterstain.",
      "D": "Contamination of the xylene with water during the coverslipping step."
    },
    "answer": "B",
    "explanation": "Swollen, pale, smudged nuclei confined to smears from a single source are the classic picture of air-drying before fixation, and normal results from other clinics in the same run argue against a laboratory fault. Exhausted hematoxylin would affect all slides in the run, not one clinic's. Excess Orange G alters the cytoplasmic colour and would not swell nuclei. Water in the xylene produces cloudiness under the coverslip rather than a change in nuclear size.",
    "id": 172
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A laboratory needs 2 litres of 50 percent ethanol to preserve effusion specimens and has a stock of 95 percent ethanol. Which preparation is correct?",
    "options": {
      "A": "1,000 mL of 95 percent ethanol made up to 2 litres with distilled water, giving a weaker mixture.",
      "B": "950 mL of 95 percent ethanol added to 1,050 mL of distilled water.",
      "C": "About 1,053 mL of 95 percent ethanol made up to 2 litres with water.",
      "D": "500 mL of 95 percent ethanol made up to 2 litres with distilled water."
    },
    "answer": "C",
    "explanation": "Using C1 times V1 equal to C2 times V2, the stock volume is 50 multiplied by 2,000 divided by 95, which is about 1,053 mL, brought up to 2 litres with water. Using 1,000 mL gives about 47.5 percent, a little weak. Using 950 mL gives about 45 percent. Using 500 mL gives about 24 percent, far too dilute to fix cells and preserve them during storage.",
    "id": 173
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A cerebrospinal fluid specimen with a very low cell count arrives for cytology. Which preparation method is best suited to concentrate the few cells with good preservation?",
    "options": {
      "A": "Cytocentrifugation of a small volume onto a slide using an absorbent card.",
      "B": "Direct smear of the fluid across a slide followed by air-drying.",
      "C": "Plasma-thrombin cell block made from the whole low-cellularity specimen.",
      "D": "Staining of the unprocessed fluid in the container with a rapid dye."
    },
    "answer": "A",
    "explanation": "Cytocentrifugation deposits all cells from a small volume onto a small area of a slide and the filter absorbs the fluid, which concentrates a sparse specimen and preserves morphology. A direct smear of a watery fluid spreads the few cells thinly or loses them. A cell block loses cells in the clot and is better for larger cellular samples. Staining the fluid in its container does not produce a viewable, fixed slide.",
    "id": 174
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A cytotechnologist doing rapid on-site evaluation of a thyroid FNA sees only a few benign follicular groups on the first air-dried slide. What should the technologist do?",
    "options": {
      "A": "Tell the operator that adequacy is certain and then finish the procedure.",
      "B": "Discard the slide and wait for the pathologist to arrive before any action.",
      "C": "Fix the slide in formalin and move on to the next patient in the list.",
      "D": "Advise that more passes are needed and keep material for extra tests."
    },
    "answer": "D",
    "explanation": "The purpose of on-site evaluation is to tell the operator whether the material is adequate, and a sparse sample means more passes are needed, with the residual material saved for a cell block or other tests. Declaring adequacy without enough cells risks a non-diagnostic result and a repeat procedure. Discarding the slide wastes the information and delays the procedure. Formalin is not a fixative for air-dried smears and abandoning the patient defeats the purpose of the evaluation.",
    "id": 175
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A bronchoalveolar lavage specimen contains 3,000,000 cells per mL. The technologist wants a suspension of 150,000 cells per mL for a cytospin preparation. How should the specimen be diluted?",
    "options": {
      "A": "One part of lavage fluid mixed with 9 parts of buffer or saline.",
      "B": "One part of lavage fluid mixed with 19 parts of buffer or saline.",
      "C": "One part of lavage fluid mixed with 29 parts of buffer or saline.",
      "D": "One part of lavage fluid mixed with 49 parts of buffer or saline."
    },
    "answer": "B",
    "explanation": "The dilution factor is 3,000,000 divided by 150,000, which is 20, so one part of fluid is mixed with 19 parts of buffer to make 20 parts in total. Mixing one to nine gives a factor of ten and a suspension of 300,000 per mL. Mixing one to 29 gives a factor of 30 and 100,000 per mL. Mixing one to 49 gives a factor of 50 and only 60,000 per mL.",
    "id": 176
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A urine specimen for cytology is received from a patient who collected the first void of the morning. The cells are degenerated, with vacuolated cytoplasm and poor nuclear detail. What advice would reduce this problem in future?",
    "options": {
      "A": "Collect a second morning void or random sample and send it promptly.",
      "B": "Collect the urine in a container with formalin as an additive.",
      "C": "Collect the urine only after the patient has fasted for twelve hours.",
      "D": "Refrigerate the first morning void for three days before delivery."
    },
    "answer": "A",
    "explanation": "Urine that has sat in the bladder overnight contains degenerated cells, so a second morning or random void sent promptly gives better-preserved urothelial cells. Formalin is not the usual preservative for cytology urine and damages cell morphology for Papanicolaou staining. Fasting does not alter cell degeneration in the bladder. Holding a specimen for three days allows further degeneration, even in the refrigerator.",
    "id": 177
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "On a Papanicolaou-stained smear, a technologist sees bright orange cytoplasm in some squamous cells and blue-green cytoplasm in others. Which statement explains the difference in colour?",
    "options": {
      "A": "Orange cells contain more glycogen, and blue-green cells contain more mucin.",
      "B": "Blue-green cells are the ones that were air-dried before the smear was fixed.",
      "C": "Orange G stains keratinized cytoplasm orange, whereas immature cells take up light green.",
      "D": "Orange cells were stained for longer in the hematoxylin than the others."
    },
    "answer": "C",
    "explanation": "Orange G stains keratin and keratinized cells orange, while intermediate and parabasal cells take up the light green component of the polychromatic counterstain and look blue-green. Glycogen and mucin do not account for the main colour contrast. Air-drying causes swelling and loss of nuclear detail and does not change the colour in this way. Hematoxylin stains nuclei and does not colour cytoplasm orange.",
    "id": 178
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A laboratory finds that the unsatisfactory rate for conventional smears rises from 2 percent to 9 percent for one clinic only, with thick, bloody preparations and many obscured cells. Which action is most appropriate?",
    "options": {
      "A": "Re-stain all of that clinic's slides with a much stronger hematoxylin solution before screening.",
      "B": "Increase the number of slides screened by each cytotechnologist per working day.",
      "C": "Replace the laboratory's stain solutions across all of its instruments immediately, without any other review.",
      "D": "Give the clinic feedback on collection technique and consider liquid-based collection."
    },
    "answer": "D",
    "explanation": "A rise confined to one source with thick, bloody smears points to collection technique, so feedback and training, together with a move to liquid-based collection that removes much blood and spreads cells thinly, address the cause. Stronger hematoxylin cannot reveal cells that are hidden by blood. Raising screening workloads increases error without improving specimens. Replacing all stain solutions is unrelated, since other clinics' slides in the same runs are acceptable.",
    "id": 179
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A cytology laboratory processes a heavily cellular malignant effusion and then a negative cervical specimen using the same rinse bath. A later review finds a single clump of malignant-looking cells on the cervical slide. What is the most likely explanation?",
    "options": {
      "A": "A genuine early cancer is present in the cervical sample from this patient.",
      "B": "Poor fixation of the cervical specimen at the collecting clinic before transport.",
      "C": "Carryover of cells from the effusion through a shared bath.",
      "D": "Over-staining of the cervical slide with the polychromatic counterstain."
    },
    "answer": "C",
    "explanation": "A single clump of foreign-looking malignant cells on a slide handled after a cellular tumour specimen in a shared bath is the typical picture of carryover contamination, which is why heavily cellular specimens are batched last and baths are filtered and changed. A genuine early cancer would show more than one stray clump and would fit the clinical picture. Poor fixation causes degeneration, not foreign cells. Over-staining deepens colours but cannot add cells.",
    "id": 180
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A thyroid FNA is evaluated for adequacy using a common criterion. How many groups of benign follicular cells, each with at least ten cells, are generally required on at least one slide?",
    "options": {
      "A": "Two groups of well-preserved benign follicular cells, each with at least ten cells.",
      "B": "Four groups of well-preserved benign follicular cells, each with at least ten cells.",
      "C": "Six groups of well-preserved benign follicular cells, each with at least ten cells.",
      "D": "Twelve groups of well-preserved benign follicular cells, each with at least ten cells."
    },
    "answer": "C",
    "explanation": "The widely used adequacy criterion for thyroid FNA is at least six groups of well-preserved benign follicular cells, each with ten or more cells, on at least one slide. Two or four groups would permit non-representative samples to be called adequate and increase false negatives. A requirement of twelve groups is stricter than the usual criterion and would raise the non-diagnostic rate without clear benefit.",
    "id": 181
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A technologist prepares a cell block from an FNA needle rinse for a lung mass and plans immunostains for predictive markers. Which handling step is most important for reliable biomarker results?",
    "options": {
      "A": "Fixing the cell block material in buffered formalin for a documented time.",
      "B": "Air-drying the cell pellet thoroughly before embedding it in paraffin wax afterward.",
      "C": "Storing the pellet in absolute ethanol for several weeks before processing.",
      "D": "Staining the pellet with Giemsa prior to embedding to confirm cell content."
    },
    "answer": "A",
    "explanation": "Predictive markers depend on controlled formalin fixation, as for tissue biopsies, so fixation time must be defined and recorded for the cell block. Air-drying a pellet damages cells and antigens and prevents proper embedding. Long storage in absolute ethanol hardens the pellet and may alter antigens. Giemsa staining before embedding adds dye that interferes with later immunostains and does not help biomarker reliability.",
    "id": 182
  },
  {
    "domain": "cytology",
    "chapter": 21,
    "question": "A cytology laboratory wants to detect whether screeners are missing abnormal cells in smears reported as negative. Which procedure provides a direct check on this problem?",
    "options": {
      "A": "Rescreening a defined proportion of negative slides by a second screener.",
      "B": "Increasing the daily slide count for each cytotechnologist to speed up review.",
      "C": "Replacing the Papanicolaou stain with a Romanowsky stain on all smears.",
      "D": "Discarding negative slides after one month to reduce the storage burden."
    },
    "answer": "A",
    "explanation": "Rescreening a proportion of negative slides, often 10 percent, by a second person directly measures how many abnormal cells were missed, and the results feed back into education. Raising daily slide counts increases fatigue and error. Changing the stain does not measure screener performance, and Romanowsky is unsuitable for alcohol-fixed smears. Discarding negative slides early removes the material needed for later review and correlation.",
    "id": 183
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "A 29-year-old woman has a routine liquid-based Pap test collected at mid-cycle. The slide shows abundant polygonal cells with transparent pink cytoplasm and small, dense, structureless nuclei, scattered among a clean background. The technologist is asked to classify the dominant squamous cell type and the likely hormonal state. What is the correct interpretation?",
    "options": {
      "A": "Parabasal cells, indicating low estrogen similar to postmenopause or the postpartum period",
      "B": "Intermediate cells, indicating progesterone dominance such as late luteal phase or pregnancy",
      "C": "Superficial cells, indicating high estrogen stimulation consistent with the ovulatory phase of the cycle",
      "D": "Metaplastic cells, indicating healing after a recent cervical biopsy or inflammatory injury"
    },
    "answer": "C",
    "explanation": "Large flat cells with pink cytoplasm and small pyknotic nuclei are superficial cells, which dominate under peak estrogen, so mid-cycle is the expected setting. Parabasal cells are small and round with dense cytoplasm and relatively large nuclei, which describes a low estrogen state instead. Intermediate cells have transparent blue-green cytoplasm with vesicular nuclei and are favoured by progesterone, so they would not give pyknotic nuclei. Metaplastic cells have thick cyanophilic cytoplasm and a more central, finely granular nucleus and do not form a clean sheet of pink flat cells.",
    "id": 184
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "A liquid-based gynecologic slide has well-preserved squamous cells, estimated at 6,500 across the preparation, and no endocervical or metaplastic cells. No abnormality is seen. The report must state the adequacy category. Which statement reflects current Bethesda guidance?",
    "options": {
      "A": "Satisfactory for evaluation, with a comment that the transformation zone component is absent",
      "B": "Unsatisfactory because the estimate is below the minimum number of squamous cells required",
      "C": "Unsatisfactory because no endocervical cells were found to confirm the target zone was sampled",
      "D": "Satisfactory only if the patient is reported to be younger than thirty years"
    },
    "answer": "A",
    "explanation": "The minimum for a liquid-based specimen is about 5,000 well-visualized squamous cells, so 6,500 meets the standard and the slide is satisfactory. An absent transformation zone component is a quality indicator and may be commented upon but does not by itself make the specimen unsatisfactory. Declaring the slide unsatisfactory on the squamous count alone would apply the conventional-smear threshold of 8,000 to 12,000 cells to the wrong preparation type. Patient age does not set the adequacy threshold for squamous cell numbers.",
    "id": 185
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "A pathologist reviews a Pap smear from a 52-year-old woman who had pelvic radiotherapy four years ago. The slide shows large squamous cells, some with two or three nuclei, cytoplasmic vacuoles and areas of both pink and blue staining within one cell. Nuclear-to-cytoplasmic ratios appear normal. Which interpretation best fits?",
    "options": {
      "A": "Low-grade squamous intraepithelial lesion with koilocytosis and marked perinuclear cavitation of cytoplasm",
      "B": "Invasive keratinizing squamous carcinoma with tumour diathesis and bizarre tadpole-shaped malignant cells",
      "C": "Herpes simplex infection producing multinucleation with molded nuclei and ground-glass chromatin",
      "D": "Radiation effect, a benign change in which cell and nuclear enlargement are proportional"
    },
    "answer": "D",
    "explanation": "Radiation changes enlarge both the cell and the nucleus, so the ratio is preserved, and polychromasia and vacuolization occur in the same cell, matching the history. A low-grade lesion shows enlarged nuclei with a raised ratio and irregular contours, and the nuclear changes are not accompanied by multinucleated, vacuolated, polychromatic cells. Invasive carcinoma would show a high ratio, coarse chromatin, tumour diathesis and malignant nuclear features, none of which are described. Herpes shows multinucleation with molding and ground-glass nuclei, but the stem has vacuolation, polychromasia and a normal ratio after radiotherapy.",
    "id": 186
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "On a smear from a 68-year-old woman, there are numerous round cells with dense blue-green cytoplasm and uniform, smooth, round nuclei. The background contains granular debris, inflammatory cells and amorphous dark blue bodies that adhere to cells. Which is the most accurate interpretation?",
    "options": {
      "A": "Cytolysis from lactobacilli, with bare intermediate nuclei and proliferation of the vaginal flora",
      "B": "Atrophic pattern with parabasal cells and blue blobs, consistent with low estrogen after menopause",
      "C": "High-grade squamous intraepithelial lesion composed of small cells with scant cytoplasm and dense nuclear chromatin",
      "D": "Follicular cervicitis with polymorphous lymphocytes and tingible body macrophages in the background"
    },
    "answer": "B",
    "explanation": "Parabasal cells with smooth uniform nuclei, granular debris and blue blobs in a postmenopausal woman describe an atrophic smear, which is benign and hormone related. Cytolysis occurs in the luteal phase or pregnancy and produces naked intermediate nuclei among lactobacilli, which would not be expected at this age without hormones. A high-grade lesion shows irregular nuclear membranes, coarse chromatin and a high ratio, rather than uniformity and smoothness in a degenerating background. Follicular cervicitis is recognized by a mixed lymphoid population with tingible body macrophages and not by parabasal cells and blue blobs.",
    "id": 187
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "A technologist estimates cellularity on a liquid-based slide using a circular preparation area of about 133 square millimetres. One 40-times field covers about 0.2 square millimetre, and the average count is 12 well-visualized squamous cells per field. What is the approximate total, and what is the adequacy conclusion?",
    "options": {
      "A": "About 8,000 cells, which is satisfactory for a liquid-based preparation",
      "B": "About 8,000 cells, which is unsatisfactory because it falls below the conventional minimum",
      "C": "About 800 cells, which is unsatisfactory and the slide should be reported as such",
      "D": "About 800 cells, which is satisfactory because squamous cells appear well preserved"
    },
    "answer": "A",
    "explanation": "The preparation holds about 133 divided by 0.2, or 665 fields, and 665 times 12 gives roughly 7,980 cells, near 8,000, above the 5,000 liquid-based minimum, so the slide is satisfactory. Treating 8,000 as unsatisfactory applies the conventional smear range to the wrong preparation type and misreads the threshold. A total of 800 cells is an arithmetic error from dropping a factor of ten in the field count. Even good preservation would not rescue a total that low, so calling 800 cells satisfactory would also be wrong.",
    "id": 188
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "A cytologist sees a sheet of cohesive cells with streaming nuclei, fine evenly distributed chromatin, multiple prominent nucleoli and abundant amphophilic cytoplasm, with neutrophils infiltrating the sheet. The patient had an endocervical biopsy two weeks ago. Which finding most strongly supports a benign interpretation?",
    "options": {
      "A": "A very high nuclear-to-cytoplasmic ratio in all cells of the cluster",
      "B": "Coarse, clumped chromatin with parachromatin clearing and irregular nuclear folds",
      "C": "Scattered single dyskeratotic cells with dense orangeophilic cytoplasm and hyperchromatic nuclei",
      "D": "Preserved polarity with uniform nuclear spacing and neutrophils within the sheet"
    },
    "answer": "D",
    "explanation": "Repair shows a cohesive monolayer in which polarity and even spacing are maintained, often with inflammatory cells within the sheet, which is the reassuring pattern here. A very high nuclear-to-cytoplasmic ratio points to neoplasia, not repair, where cytoplasm is abundant. Coarse clumped chromatin with parachromatin clearing and irregular folds is a feature of malignant nuclei. Single dyskeratotic cells with dense orange cytoplasm suggest a different process, such as a squamous lesion, and do not describe the sheet pattern of repair.",
    "id": 189
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "A 33-year-old woman with an intrauterine device has a smear showing a small, tight cluster of glandular cells with large vacuoles, nuclear enlargement and nucleoli, but with smooth nuclear membranes and no mitoses. What is the best reporting approach?",
    "options": {
      "A": "Report benign glandular cells with a comment on probable intrauterine device effect, given the history",
      "B": "Report atypical glandular cells and recommend immediate colposcopy and endocervical curettage",
      "C": "Report adenocarcinoma in situ because the cluster is tight and has prominent nucleoli",
      "D": "Report unsatisfactory because glandular cells with vacuoles cannot be reliably evaluated on a smear"
    },
    "answer": "A",
    "explanation": "IUD effect produces vacuolated glandular cells with nuclear enlargement and nucleoli but smooth membranes and no real atypia, so the benign category with an explanatory comment is appropriate. Calling atypical glandular cells and sending the patient to colposcopy treats a recognized benign mimic as a lesion, with avoidable harm. Adenocarcinoma in situ shows feathered cluster edges, hyperchromasia and coarse chromatin, not smooth vacuolated cells. An unsatisfactory report applies to preparations with too few or obscured squamous cells and not to a cluster that is difficult but interpretable.",
    "id": 190
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "During a busy week, the laboratory supervisor reviews monthly statistics and finds the ratio of atypical squamous cells to squamous intraepithelial lesion has risen to 5 to 1 from the usual 2 to 1. What is the most appropriate response?",
    "options": {
      "A": "Accept the result because a higher atypia ratio shows improved sensitivity of the screening staff",
      "B": "Stop all gynecologic screening until every staff member completes a new proficiency test",
      "C": "Review the use of the atypical category, retrain staff on criteria and rescreen a sample of cases",
      "D": "Report every atypical case as low-grade lesion to reduce the ratio automatically"
    },
    "answer": "C",
    "explanation": "A rising ratio suggests over-use of the equivocal category, so the proportionate response is to review the criteria, retrain and audit a sample of slides by rescreening. Accepting the change as better sensitivity misreads a quality indicator that is meant to stay within a defined range. Halting all screening is out of proportion to a trend that can be corrected by targeted review. Forcing atypical cases into the low-grade category would distort reporting categories to fix a number and would lead to unjustified management.",
    "id": 191
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "A patient in her third trimester has a smear with many intermediate cells showing boat-shaped outlines, thick central folds and yellow-brown glycogen deposits in the cytoplasm. Nuclei are small and uniform. What is the best explanation for this pattern?",
    "options": {
      "A": "Progesterone effect in pregnancy producing navicular cells with glycogen",
      "B": "Radiation effect from a previous course of pelvic radiotherapy years earlier",
      "C": "Estrogen deficiency leading to atrophy with a predominance of parabasal cells",
      "D": "Infection with Trichomonas vaginalis producing characteristic cytoplasmic changes"
    },
    "answer": "A",
    "explanation": "Navicular cells are boat-shaped glycogenated intermediate cells formed under progesterone dominance, typical of pregnancy. Radiation effect produces enlarged cells with vacuolization and polychromasia and does not give this pattern of folded glycogenated cells. Estrogen deficiency yields parabasal cells with a high nuclear-to-cytoplasmic ratio rather than larger folded intermediate cells. Trichomonas shows pear-shaped organisms with eccentric nuclei and cytoplasmic halos around squamous nuclei, not glycogenated boat-shaped cells.",
    "id": 192
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "A woman aged 31 has a luteal-phase smear with abundant rod-shaped bacteria, numerous naked, round, uniform intermediate nuclei and cytoplasmic debris. A trainee suggests the naked nuclei represent a high-grade lesion. Which feature best argues against that suggestion?",
    "options": {
      "A": "The nuclei are naked and therefore must be derived from degenerating cells",
      "B": "The nuclei are small, round and uniform with smooth contours and fine chromatin",
      "C": "The background contains many bacteria, which always excludes any neoplastic process",
      "D": "The patient is under forty, and high-grade lesions never occur in that age group"
    },
    "answer": "B",
    "explanation": "Cytolysis leaves intact intermediate nuclei that remain uniform and smooth with fine chromatin, which does not fit the irregular, hyperchromatic nuclei of a high-grade lesion. Being naked does not prove a benign cause, because neoplastic nuclei can also be stripped of cytoplasm. A bacterial background does not exclude neoplasia, since the two can coexist. High-grade lesions occur in women under forty, so age is not a safe argument.",
    "id": 193
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "A technologist notes that the eosinophilic index in a laboratory's smears from reproductive-age patients has fallen sharply over two weeks, although clinical populations are unchanged. Hematoxylin is fresh. Which step is the most likely cause that should be examined first?",
    "options": {
      "A": "A recent change to the fixative from spray to a longer immersion in alcohol",
      "B": "A new batch of cytobrushes with a slightly different bristle length",
      "C": "A drift in the pH or exhaustion of the EA counterstain solution",
      "D": "A rise in the number of postmenopausal patients attending the screening clinic"
    },
    "answer": "C",
    "explanation": "The eosinophilic index depends on the counterstain, and a drift in pH or a depleted EA solution changes the proportion of pink cytoplasm independent of the patient's hormones. Changing from spray to immersion fixation affects preservation but not selectively the pink-to-blue balance in this way. A different brush might change cell yield but not the colour of already collected cells. The stem states the patient population is unchanged, so a shift toward postmenopausal patients is excluded as a cause.",
    "id": 194
  },
  {
    "domain": "cytology",
    "chapter": 22,
    "question": "A 24-year-old woman, 14 weeks postpartum and breastfeeding, has a smear dominated by parabasal cells with high nuclear-to-cytoplasmic ratios and a few inflammatory cells. Nuclei are round with smooth contours and finely granular chromatin. Her recorded history shows no abnormal cytology. What is the most appropriate report and action?",
    "options": {
      "A": "Report high-grade squamous intraepithelial lesion and refer urgently for colposcopy with biopsy",
      "B": "Report atypical glandular cells and request endometrial sampling to exclude uterine pathology",
      "C": "Report negative for lesion with a comment on a hormonal pattern of low estrogen",
      "D": "Report unsatisfactory and instruct the clinician to repeat after one week regardless of history"
    },
    "answer": "C",
    "explanation": "Postpartum and lactation lower estrogen, so parabasal predominance with smooth uniform nuclei is a benign hormonal pattern that can be reported as negative with a comment. A high-grade call would ignore the smooth contours and fine chromatin and send a healthy woman to an unnecessary procedure. Atypical glandular cells have no support, as no glandular abnormality is described. An unsatisfactory report requires too few squamous cells or obscuring factors, and a one-week repeat would not change the hormonal state.",
    "id": 195
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "A smear from a 27-year-old woman shows mature squamous cells with nuclei about 3.5 times the area of a normal intermediate nucleus, irregular raisin-like membranes, coarse chromatin and binucleation. Cells have sharply defined clear perinuclear cavities with a dense peripheral cytoplasmic rim. What is the most appropriate interpretation?",
    "options": {
      "A": "High-grade squamous intraepithelial lesion with small basaloid cells and marked nuclear irregularity",
      "B": "Low-grade squamous intraepithelial lesion consistent with productive human papillomavirus infection",
      "C": "Atypical squamous cells that cannot exclude high-grade lesion because of crowded small cells",
      "D": "Reactive cellular changes associated with inflammation and a nonspecific perinuclear halo"
    },
    "answer": "B",
    "explanation": "Large mature cells with nuclear enlargement above three times the intermediate area, membrane irregularity and true koilocytic cavities define a low-grade lesion, which reflects productive viral infection. High-grade lesion consists of small basaloid cells with scant cytoplasm and a very high ratio, not abundant cytoplasm. Atypical cells that cannot exclude high grade are small metaplastic-type cells, which this description lacks. Reactive change gives nuclear enlargement of less than about 1.5 times with smooth contours and poorly defined halos, so it does not explain these features.",
    "id": 196
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "A cytologist reviews a slide containing single small cells with scant dense cytoplasm, nuclei occupying most of the cell, coarse evenly distributed chromatin and deep notches in the nuclear membrane. A few cells appear in disorderly sheets. Which diagnosis best fits?",
    "options": {
      "A": "Low-grade squamous intraepithelial lesion with koilocytes and binucleated mature cells",
      "B": "Atrophy with parabasal cells and blue blobs in a granular background",
      "C": "Cytolysis with naked intermediate nuclei among lactobacilli in the luteal phase",
      "D": "High-grade squamous intraepithelial lesion arising from immature basaloid cells"
    },
    "answer": "D",
    "explanation": "Small cells with a high ratio, coarse chromatin and notched membranes in disordered sheets are the hallmark of high-grade lesion. Low-grade lesion involves larger mature cells with abundant cytoplasm and cavitation, so the cell size here argues against it. Atrophy gives uniform smooth nuclei without notching or coarse chromatin. Cytolysis leaves bare, uniform intermediate nuclei and does not produce small cells with irregular, notched nuclei.",
    "id": 197
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "A woman has ASC-US on a Pap test and reflex testing for high-risk human papillomavirus is negative. Which action is the most reasonable according to common screening principles?",
    "options": {
      "A": "Return to routine screening, since a negative high-risk result gives low short-term risk",
      "B": "Immediate colposcopy with endocervical curettage because any atypical result requires tissue sampling",
      "C": "Repeat cytology in three months and treat empirically with antiviral therapy",
      "D": "Hysterectomy planning because a negative test is unreliable for atypical cells"
    },
    "answer": "A",
    "explanation": "A negative high-risk result after ASC-US carries a very low risk of high-grade disease, so a return to routine screening is the usual approach under most programs. Immediate colposcopy is reserved for a positive result or for atypical cells that cannot exclude high-grade lesion. Repeating cytology in three months with empirical antiviral therapy has no basis, since no antiviral treatment of HPV exists. Hysterectomy is far out of proportion to an equivocal, HPV-negative finding.",
    "id": 198
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "On a liquid-based slide, a small group of cells with metaplastic size, high nuclear-to-cytoplasmic ratio, mild hyperchromasia and slightly irregular membranes is seen, fewer than ten cells in total. The features are insufficient for a definite lesion. What is the most appropriate category?",
    "options": {
      "A": "Atypical squamous cells of undetermined significance with reflex human papillomavirus triage",
      "B": "Low-grade squamous intraepithelial lesion with a comment on nuclear size",
      "C": "Atypical squamous cells, cannot exclude a high-grade lesion",
      "D": "Negative for intraepithelial lesion with a comment on immature metaplasia"
    },
    "answer": "C",
    "explanation": "Small cells with high ratio and a few irregular membranes raise concern for high-grade disease but fall short of proof, which is exactly the ASC-H category and leads to colposcopy. ASC-US applies to mature cells with enlarged nuclei and would send a patient to HPV triage, which is not appropriate when high grade is possible. Low-grade lesion requires large mature cells with typical nuclear enlargement and cavitation. A negative report ignores the nuclear irregularity and ratio that go beyond immature metaplasia.",
    "id": 199
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "A smear shows a tight cluster of columnar cells with elongated, hyperchromatic, stratified nuclei protruding from the edges like feathers, rosettes, scattered mitoses and apoptotic bodies, in a clean background. Which interpretation is most appropriate?",
    "options": {
      "A": "Squamous cell carcinoma with keratinization and a tumour diathesis",
      "B": "Tubal metaplasia with ciliated cells and terminal bars on the surface",
      "C": "Endometrial cells shed in the early proliferative phase of the cycle",
      "D": "Endocervical adenocarcinoma in situ, a precursor to invasive glandular cancer"
    },
    "answer": "D",
    "explanation": "Feathering, rosettes, stratified hyperchromatic nuclei, mitoses and apoptoses with no diathesis indicate in situ glandular neoplasia. Squamous carcinoma consists of squamous cells with keratinization or syncytial groups and often a diathesis. Tubal metaplasia would show cilia and terminal bars, with milder nuclear changes and no mitoses. Early cycle endometrial cells are small tight balls with scant cytoplasm and without rosettes, mitotic activity or feathering.",
    "id": 200
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "A technologist identifies a pear-shaped organism, about 20 micrometres long, with a pale eccentric nucleus and fine red-orange granules in a background of neutrophils. Squamous cells show perinuclear halos. Which statement is correct?",
    "options": {
      "A": "The finding is Candida, and treatment should target budding yeast with antifungals",
      "B": "The organism is Trichomonas vaginalis, and a confirmatory specific test is advisable in asymptomatic patients",
      "C": "The organism is Actinomyces, which is diagnosed by tangled filamentous masses",
      "D": "The finding represents herpes simplex virus with multinucleated molded cells"
    },
    "answer": "B",
    "explanation": "A pear-shaped flagellate with an eccentric pale nucleus in an inflammatory background is Trichomonas, whose cytologic sensitivity is limited, so confirmation by a specific test is sensible. Candida appears as small budding yeast and pseudohyphae, not as a pear-shaped body with a nucleus. Actinomyces forms tangled filamentous masses with cotton-ball appearance, which is a different morphology. Herpes is a nuclear change in multinucleated cells and not an organism with a nucleus visible in the body of a parasite.",
    "id": 201
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "A 35-year-old woman has a Pap test with background of coccobacilli coating squamous cells so that borders appear fuzzy, no lactobacilli and few leukocytes. Which interpretation fits best?",
    "options": {
      "A": "Trichomonas infection, because few leukocytes are expected in such cases",
      "B": "Candida overgrowth, since the bacterial coating indicates yeast infection",
      "C": "Shift in flora suggestive of bacterial vaginosis with clue cells",
      "D": "Cytolysis due to excess lactobacilli in the luteal phase of the cycle"
    },
    "answer": "C",
    "explanation": "Coccobacilli coating cells with loss of lactobacilli and a lack of inflammation characterize a shift in flora suggestive of bacterial vaginosis, with the coated cells called clue cells. Trichomonas is a protozoan, and its identification rests on the organism itself within an inflammatory background. Candida shows yeast and pseudohyphae, not a bacterial coating. Cytolysis involves abundant lactobacilli lysing cells and leaving bare nuclei, which is the opposite of a loss of lactobacilli.",
    "id": 202
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "Over one quarter, a laboratory reports 540 atypical squamous cell results and 135 squamous intraepithelial lesion results. A supervisor calculates the ratio and wants to know how to interpret it. What is the best conclusion?",
    "options": {
      "A": "The ratio is 4.0, above the commonly accepted range, which prompts a review of criteria and use of the category",
      "B": "The ratio is 0.25, showing under-calling of equivocal cases that requires added training",
      "C": "The ratio is 4.0, which reflects excellent sensitivity and requires no action by management",
      "D": "The ratio is 0.25, showing that the laboratory reports nearly all abnormal cases as high grade"
    },
    "answer": "A",
    "explanation": "The ratio is 540 divided by 135, which is 4.0, higher than the usual upper limit of about 3, so the laboratory should review its criteria and compare readers. Inverting the fraction to 0.25 misstates the indicator and the conclusion drawn from it. A high ratio does not show excellent sensitivity, since it more often signals over-use of an equivocal category. The inverted value would not mean most cases are called high grade either, as the ratio does not measure grade.",
    "id": 203
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "A cytologist sees multinucleated squamous cells with nuclei molded against one another, chromatin margination at the nuclear membrane and a ground-glass nuclear appearance, in an inflammatory background with necrosis. Which organism is most likely responsible?",
    "options": {
      "A": "Cytomegalovirus, with a single large owl's eye inclusion in each affected cell",
      "B": "Human papillomavirus type 6, producing koilocytes with a perinuclear halo",
      "C": "Chlamydia trachomatis, with cytoplasmic inclusions seen in metaplastic cells",
      "D": "Herpes simplex virus, producing multinucleation, molding and margination of chromatin"
    },
    "answer": "D",
    "explanation": "Multinucleation with molding, margination and ground-glass nuclei form the classic herpes pattern. Cytomegalovirus produces a single large intranuclear inclusion with a halo, an owl's eye, in an enlarged cell. HPV produces koilocytes with clear cavities and nuclear irregularity, not molded ground-glass multinucleated cells. Chlamydia cannot be reliably identified on a Pap test and is not defined by this nuclear pattern.",
    "id": 204
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "A woman with postcoital bleeding has a smear showing small to medium cells in syncytial groups with coarse irregular chromatin, macronucleoli and a background of old blood and necrotic debris. Which statement is most accurate?",
    "options": {
      "A": "The pattern is typical of low-grade lesion and requires only repeat cytology in a year",
      "B": "The features favour invasive nonkeratinizing carcinoma, and prompt biopsy and referral are needed",
      "C": "The picture is a benign repair reaction following recent cervical trauma",
      "D": "The cells are consistent with atrophy and warrant a short course of local estrogen"
    },
    "answer": "B",
    "explanation": "Syncytial groups, macronucleoli and a tumour diathesis strongly suggest invasive carcinoma, and the bleeding adds urgency, so biopsy is required. Low-grade lesion has mature cells with a clean background and does not give macronucleoli or diathesis. Repair has cohesive sheets with streaming and preserved polarity, and its nucleoli are not accompanied by coarse chromatin and necrosis. Atrophy gives smooth uniform nuclei, and estrogen would delay the work-up of a suspected cancer.",
    "id": 205
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "A liquid-based slide from a 47-year-old woman contains a hyperchromatic crowded group. Edges show individual cells with high ratio and irregular nuclear membranes, and single similar cells are present elsewhere on the slide. What is the most defensible interpretation?",
    "options": {
      "A": "High-grade squamous intraepithelial lesion, supported by single abnormal cells away from the group",
      "B": "Benign endometrial cells because crowded groups in this age group are always benign",
      "C": "Reactive endocervical cells because all crowded groups represent a repair response",
      "D": "Unsatisfactory specimen because the thick group obscures the neighbouring squamous cells"
    },
    "answer": "A",
    "explanation": "Individual cells with high ratio and irregular nuclei at the edge and elsewhere on the slide point to high-grade lesion, since isolated abnormal cells are a dependable sign. Saying that crowded groups in this age group are always benign is a rule with exceptions that would miss true lesions. Repair gives cohesive sheets with polarity and prominent nucleoli, not hyperchromatic irregular nuclei. A thick group does not make a specimen unsatisfactory when the rest of the slide is evaluable and abnormal cells are seen.",
    "id": 206
  },
  {
    "domain": "cytology",
    "chapter": 23,
    "question": "A pathologist reviewing a Pap test from a 58-year-old postmenopausal woman sees small clusters of cells with scant vacuolated cytoplasm, small nucleoli, and a thin watery diathesis with engulfed neutrophils. Which next step is best?",
    "options": {
      "A": "Report negative for lesion and resume routine screening in three years",
      "B": "Treat empirically for Trichomonas vaginalis and repeat the smear after therapy",
      "C": "Report atypical glandular cells, endometrial origin, and recommend endometrial sampling",
      "D": "Perform human papillomavirus triage and rely on a negative result to exclude disease"
    },
    "answer": "C",
    "explanation": "Small clusters with vacuoles, nucleoli and a thin diathesis with engulfed neutrophils in a postmenopausal woman suggest endometrial neoplasia, so an atypical glandular interpretation with endometrial sampling is appropriate. A negative report would dismiss cells that are abnormal in an age group where endometrial cells themselves warrant attention. Empirical treatment of Trichomonas does not address the cell findings, since no organism is described. HPV triage does not exclude endometrial cancer, which is unrelated to HPV.",
    "id": 207
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "A pleural fluid shows protein of 48 g/L with serum protein of 75 g/L, and LDH of 150 U/L with serum LDH of 330 U/L. The upper reference limit for serum LDH is 250 U/L. According to Light's criteria, how is the effusion classified?",
    "options": {
      "A": "Exudate, since the pleural to serum protein ratio of 0.64 exceeds 0.5",
      "B": "Transudate, since the pleural to serum LDH ratio of 0.45 is below the cut-off",
      "C": "Transudate, since the pleural LDH is less than two thirds of the serum upper limit",
      "D": "Indeterminate, since the protein and LDH criteria give conflicting classifications"
    },
    "answer": "A",
    "explanation": "Only one criterion needs to be met for an exudate, and 48 divided by 75 gives 0.64, above 0.5, so the fluid is an exudate even though the LDH criteria are not met. Classifying it as a transudate because of the LDH ratio ignores that a single positive criterion is enough. Choosing a transudate based on the LDH comparison with the reference limit repeats that error, since 150 U/L is below the 167 U/L threshold but the protein criterion has already been met. Conflicting results do not create an indeterminate category in Light's scheme.",
    "id": 208
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "On a Romanowsky-stained effusion smear, round cells with central nuclei, fine chromatin, two-toned cytoplasm and a fuzzy lacy outer border lie in flat sheets with small clear gaps between adjacent cells. What do these cells represent?",
    "options": {
      "A": "Metastatic adenocarcinoma cells forming knobby three-dimensional balls with smooth borders",
      "B": "Macrophages with phagocytosed debris and eccentric kidney-shaped nuclei",
      "C": "Mesothelial cells with microvilli and windows between adjacent cell membranes",
      "D": "Reactive lymphocytes with scant cytoplasm and condensed chromatin"
    },
    "answer": "C",
    "explanation": "Two-toned cytoplasm, a fuzzy microvillous border and small windows between neighbouring cells are classic features of mesothelial cells. Metastatic adenocarcinoma balls have smooth, sharp outer outlines without windows. Macrophages have eccentric kidney-shaped nuclei and foamy cytoplasm instead of central round nuclei with lacy borders. Reactive lymphocytes are small cells with scant cytoplasm and would not form flat sheets with windows.",
    "id": 209
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "A cell block from a malignant pleural effusion in a woman shows cohesive balls of cells with positive staining for TTF-1 and napsin A, and negative staining for calretinin and WT1. What is the most likely origin?",
    "options": {
      "A": "Malignant mesothelioma of the epithelioid type",
      "B": "Lung adenocarcinoma metastatic to the pleural space",
      "C": "Serous carcinoma of the ovary with peritoneal spread",
      "D": "Invasive lobular carcinoma of the breast"
    },
    "answer": "B",
    "explanation": "TTF-1 and napsin A with negative mesothelial markers indicate lung adenocarcinoma. Epithelioid mesothelioma would be positive for calretinin and WT1 and negative for TTF-1. Ovarian serous carcinoma is typically positive for PAX8 and WT1 and negative for TTF-1 and napsin A. Lobular breast carcinoma is more likely to be positive for GATA3 and estrogen receptor and does not express napsin A.",
    "id": 210
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "A cerebrospinal fluid sample arrives in the laboratory two hours after collection, left at room temperature. The cell count is lower than expected for the patient's symptoms. Which explanation is most likely?",
    "options": {
      "A": "The counting chamber has been calibrated incorrectly, so every count is underestimated",
      "B": "The cytospin speed is too low, so all the cells remain in the supernatant",
      "C": "Fixation in alcohol has shrunk the cells below the size recognized by the counter",
      "D": "Cells lyse rapidly in cerebrospinal fluid, so a delay lowers the count"
    },
    "answer": "D",
    "explanation": "CSF is low in protein and fragile cells begin to lyse within about an hour, so a two-hour delay at room temperature falsely lowers the count. A miscalibrated chamber would be revealed by other results and is not suggested by the history. A low cytospin speed would affect preparation rather than the chamber count. The stem does not mention fixation, and alcohol shrinkage does not explain a count obtained from an unfixed sample.",
    "id": 211
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "In a Neubauer chamber, 24 nucleated cells are counted in the nine large squares of an undiluted cerebrospinal fluid sample. Each large square is 1 mm by 1 mm with a depth of 0.1 mm. What is the cell concentration?",
    "options": {
      "A": "2.4 cells per microlitre",
      "B": "240 cells per microlitre",
      "C": "About 27 cells per microlitre",
      "D": "About 216 cells per microlitre"
    },
    "answer": "C",
    "explanation": "The counted volume is nine squares times 0.1 microlitre each, which is 0.9 microlitre, so 24 divided by 0.9 is about 27 cells per microlitre. A value of 2.4 comes from dividing by 10 and not by the actual volume. A value of 240 comes from multiplying by 10 instead of dividing by 0.9. A value near 216 comes from multiplying 24 by 9, treating the nine squares as a multiplier rather than as the volume.",
    "id": 212
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "A bronchoalveolar lavage from an immunosuppressed patient shows foamy, honeycomb-like eosinophilic material on Papanicolaou stain. Which special stain best confirms the suspected organism?",
    "options": {
      "A": "Grocott methenamine silver, which stains the cyst wall of Pneumocystis jirovecii",
      "B": "Mucicarmine, which stains the polysaccharide capsule of Aspergillus species",
      "C": "Ziehl-Neelsen stain, which stains the hyphae of Mucorales a bright red",
      "D": "Oil Red O, which stains the lipid within alveolar macrophages red"
    },
    "answer": "A",
    "explanation": "Foamy alveolar casts in an immunosuppressed patient suggest Pneumocystis, and the silver stain outlines its cup-shaped cysts. Mucicarmine stains the capsule of Cryptococcus and not that of Aspergillus. Ziehl-Neelsen identifies acid-fast bacilli and does not stain Mucorales hyphae red. Oil Red O highlights lipid in macrophages, which is useful for lipid-laden macrophage index but does not identify the organism.",
    "id": 213
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "A sputum sample shows many squamous cells, abundant bacteria and food particles, but no alveolar macrophages or ciliated bronchial cells. How should the specimen be reported?",
    "options": {
      "A": "Negative for malignancy, since no atypical cells were identified",
      "B": "Atypical, since squamous cells are abnormal in respiratory samples",
      "C": "Positive for malignancy, since squamous cells are the typical type of lung cancer",
      "D": "Unsatisfactory, since the sample is saliva rather than deep respiratory material"
    },
    "answer": "D",
    "explanation": "Alveolar macrophages prove that a sample comes from the deep lung, and their absence in a sample of oral squamous cells and food indicates saliva, so the sample is unsatisfactory and should be recollected. Reporting negative gives false reassurance from a sample that did not sample the lung. Squamous cells are normal contaminants of respiratory samples, so they are not atypical in themselves. Their presence does not mean cancer.",
    "id": 214
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "A bronchial brushing shows small cells that are two to three times the size of a lymphocyte, with scant cytoplasm, marked nuclear molding, salt-and-pepper chromatin and crush artefact. Which immunocytochemical result would best support the diagnosis?",
    "options": {
      "A": "Positive staining for p40 and p63, indicating squamous differentiation",
      "B": "Positive staining for synaptophysin and CD56, with a high Ki-67 index",
      "C": "Positive staining for TTF-1 and napsin A, with a low Ki-67 index",
      "D": "Positive staining for calretinin and WT1, with loss of BAP1 expression"
    },
    "answer": "B",
    "explanation": "Nuclear molding, scant cytoplasm and salt-and-pepper chromatin indicate small cell carcinoma, which expresses neuroendocrine markers such as synaptophysin and CD56 and has a very high proliferation rate. p40 and p63 mark squamous cell carcinoma, which has keratinized cells and a different appearance. TTF-1 and napsin A suggest adenocarcinoma, and a low Ki-67 would not fit this tumour. Calretinin, WT1 and BAP1 loss describe mesothelioma.",
    "id": 215
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "A bronchoalveolar lavage from a non-smoking patient shows 62 percent macrophages, 33 percent lymphocytes, 3 percent neutrophils and 2 percent eosinophils. Which interpretation best fits the differential?",
    "options": {
      "A": "Normal differential, since lymphocytes in this range are expected in health",
      "B": "Lymphocytosis, which raises concern for sarcoidosis or hypersensitivity pneumonitis",
      "C": "Neutrophilia, which is typical of bacterial pneumonia or acute lung injury",
      "D": "Eosinophilia, which indicates an eosinophilic pneumonia or parasitic disease"
    },
    "answer": "B",
    "explanation": "Lymphocytes at 33 percent are well above the normal range of about 10 to 15 percent and above the threshold of about 25 percent that suggests granulomatous or hypersensitivity disease. The differential is not normal, because a macrophage fraction under 85 percent and a high lymphocyte count are both abnormal. Neutrophils at 3 percent are not raised enough to suggest bacterial pneumonia. Eosinophils at 2 percent are far below the 25 percent that supports eosinophilic pneumonia.",
    "id": 216
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "A technologist finds a cluster of atypical cells on a pleural fluid slide, but the patient's other specimens that day were all benign. The cluster has a different stain tone from the remaining cells. What should be done first?",
    "options": {
      "A": "Report the specimen as positive for malignancy on the basis of the cluster",
      "B": "Discard the slide and request a new specimen from the patient immediately",
      "C": "Suspect a floater from a staining bath, review the batch and compare with the cell block",
      "D": "Ignore the cluster since a single group cannot establish a diagnosis"
    },
    "answer": "C",
    "explanation": "A group with a different stain tone against a benign background fits a floater carried in a staining bath, so the batch and stain baths are reviewed and the cell block is used to confirm. Reporting malignancy from the cluster risks a false-positive result with serious consequences. Requesting a new specimen without investigating subjects the patient to an unnecessary procedure. Ignoring the cluster would be wrong too, because if it belongs to the patient, it matters.",
    "id": 217
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "A patient with long-standing asthma has a sputum sample showing long, spiral-shaped mucus casts and narrow, pointed, bipyramidal crystals among eosinophils. What are these two findings?",
    "options": {
      "A": "Asbestos bodies and ferruginous crystals",
      "B": "Psammoma bodies and Cowdry inclusions",
      "C": "Creola bodies and Russell bodies",
      "D": "Curschmann spirals and Charcot-Leyden crystals"
    },
    "answer": "D",
    "explanation": "Spiral mucus casts are Curschmann spirals, and pointed bipyramidal crystals derived from eosinophil granules are Charcot-Leyden crystals, both seen in asthma. Asbestos bodies are golden-brown beaded fibres and are a sign of asbestos exposure. Psammoma bodies are calcified concentric bodies and Cowdry inclusions are viral intranuclear structures. Creola bodies are clusters of bronchial cells in asthma, but Russell bodies are plasma cell inclusions and do not match the second finding.",
    "id": 218
  },
  {
    "domain": "cytology",
    "chapter": 24,
    "question": "A peritoneal washing from a woman undergoing surgery for an ovarian mass shows papillary clusters of large pleomorphic cells with prominent nucleoli and several concentrically laminated calcified bodies. Which interpretation is most appropriate?",
    "options": {
      "A": "Positive for malignancy, consistent with serous carcinoma, with consequences for surgical staging",
      "B": "Negative for malignancy, because psammoma bodies occur only in benign disease",
      "C": "Reactive mesothelial hyperplasia, since papillary clusters are typical of benign mesothelium",
      "D": "Endometriosis, because pleomorphic cells with calcification are characteristic of this disease"
    },
    "answer": "A",
    "explanation": "Papillary clusters of large pleomorphic cells with psammoma bodies in a woman with an ovarian mass favour serous carcinoma, and a positive washing raises the stage. Psammoma bodies occur in both benign and malignant conditions, so they do not exclude cancer. Reactive mesothelium shows cells of uniform appearance without marked pleomorphism. Endometriosis gives bland glandular or stromal cells and hemosiderin, not pleomorphic cells with large nucleoli.",
    "id": 219
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A voided urine specimen from a patient with a history of bladder cancer shows several well-preserved urothelial cells with a nuclear-to-cytoplasmic ratio above 0.7, marked hyperchromasia, irregular nuclear membranes and coarse chromatin. More than ten such cells are present. Under the Paris System, what is the best category?",
    "options": {
      "A": "Atypical urothelial cells, because the number of cells is large and the features are incomplete",
      "B": "Negative for high-grade urothelial carcinoma, with a comment on reactive changes in the specimen",
      "C": "Low-grade urothelial neoplasia, because the cells appear in a clean background and show regular outlines",
      "D": "High-grade urothelial carcinoma, because the full set of features is present in a sufficient number of cells"
    },
    "answer": "D",
    "explanation": "A high ratio with hyperchromasia, irregular membranes and coarse chromatin in more than about ten well-preserved cells meets the Paris criteria for high-grade carcinoma. The atypical category is used when features are incomplete or the ratio is intermediate, which does not apply here. A negative report would ignore a full set of malignant features. Low-grade neoplasia is defined by bland papillary clusters with fibrovascular cores, not by hyperchromatic irregular nuclei.",
    "id": 220
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A renal transplant patient has a urine sample showing cells with enlarged nuclei filled by a single, smudged, homogeneous basophilic inclusion, with chromatin condensed against a smooth nuclear membrane, in a clean background. What is the most likely interpretation?",
    "options": {
      "A": "High-grade urothelial carcinoma with hyperchromatic nuclei and coarse chromatin",
      "B": "Polyomavirus-infected decoy cells, which can be quantified by viral load testing",
      "C": "Cytomegalovirus infection with owl's eye inclusions and cytoplasmic granules",
      "D": "Reactive urothelial cells from catheterization with nuclear halos and vacuoles"
    },
    "answer": "B",
    "explanation": "A single ground-glass inclusion with smooth membranes in an immunosuppressed patient identifies decoy cells due to polyomavirus, and a viral load can guide management. High-grade carcinoma has irregular membranes and coarse chromatin, not a single homogeneous inclusion. Cytomegalovirus has a distinct halo around a discrete inclusion and cytoplasmic granules. Catheterization effects include clusters with vacuoles but not a smudged intranuclear inclusion.",
    "id": 221
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A fine needle aspirate of a breast mass shows cohesive, antler-shaped clusters of ductal cells with smooth borders, numerous bare bipolar nuclei in the background and fragments of magenta-staining stroma on a Romanowsky stain. Which diagnosis is most likely?",
    "options": {
      "A": "Invasive ductal carcinoma with discohesive pleomorphic cells",
      "B": "Invasive lobular carcinoma with intracytoplasmic mucin vacuoles",
      "C": "Fibroadenoma, a benign lesion with a dual cell population and stromal fragments",
      "D": "Fat necrosis with lipid-laden macrophages and multinucleated giant cells"
    },
    "answer": "C",
    "explanation": "Staghorn clusters, bare bipolar myoepithelial nuclei and stromal fragments are the classic triad of fibroadenoma. Ductal carcinoma lacks bipolar nuclei and shows dispersed pleomorphic cells. Lobular carcinoma shows small discohesive cells with intracytoplasmic vacuoles, not cohesive clusters. Fat necrosis would show foamy macrophages and giant cells in necrotic debris, not antler-shaped epithelial clusters.",
    "id": 222
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "On a breast aspirate, a technologist measures benign ductal nuclei at about 8 micrometres and adjacent tumour nuclei at about 20 micrometres. A red blood cell on the same slide is about 7 micrometres. Which statement best reflects this finding?",
    "options": {
      "A": "The tumour nuclei are nearly three red cell diameters, which supports a malignant interpretation",
      "B": "The tumour nuclei are about one red cell diameter, which supports a benign interpretation",
      "C": "The size of nuclei relative to red cells has no value for interpretation of breast aspirates",
      "D": "The benign nuclei are too large to serve as an internal reference for comparison"
    },
    "answer": "A",
    "explanation": "Twenty divided by seven is about 2.9 red cell diameters, which falls in the range seen in malignant cells, whereas benign ductal nuclei are about one to one and a half diameters. The suggestion of a single diameter misreads the arithmetic. Relative size to red cells is a recognized practical yardstick and not valueless. Benign nuclei of 8 micrometres are about 1.1 diameters and so serve well as a reference.",
    "id": 223
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A thyroid aspirate from a solid nodule is highly cellular with scant colloid and shows follicular cells in crowded microfollicles. No nuclear features of papillary carcinoma are seen. What is the most appropriate Bethesda category, and why?",
    "options": {
      "A": "Benign (category II), because follicular cells with microfollicles are typical of a hyperplastic nodule",
      "B": "Follicular neoplasm (category IV), because malignancy depends on capsular or vascular invasion on histology",
      "C": "Malignant (category VI), because a high cell count and scant colloid indicate carcinoma",
      "D": "Nondiagnostic (category I), because scant colloid shows that the sample is inadequate"
    },
    "answer": "B",
    "explanation": "A cellular aspirate with microfollicles and no papillary nuclear features is a follicular neoplasm, and adenoma cannot be separated from carcinoma on cytology, so lobectomy and histology are needed. A benign call would underrate a lesion with a real malignancy risk. A malignant category requires definite cytologic features of carcinoma, which are not present. A cellular sample with abundant follicular cells is adequate, and scant colloid does not make it nondiagnostic.",
    "id": 224
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A thyroid aspirate shows enlarged, overlapping oval nuclei with pale powdery chromatin, longitudinal grooves, and round, sharply outlined intranuclear pseudo-inclusions in many cells. Thick, ropy colloid is present. Which interpretation is correct?",
    "options": {
      "A": "Hashimoto thyroiditis with Hurthle cells and a polymorphous lymphoid infiltrate",
      "B": "Medullary carcinoma with plasmacytoid cells and amyloid in the background",
      "C": "Nodular goitre with watery colloid and benign follicular honeycomb sheets",
      "D": "Papillary thyroid carcinoma, defined by its characteristic nuclear features"
    },
    "answer": "D",
    "explanation": "Nuclear grooves, powdery chromatin, overlapping nuclei and intranuclear pseudo-inclusions in numerous cells define papillary carcinoma. Hashimoto thyroiditis shows lymphocytes, plasma cells and oncocytic cells rather than these nuclear features. Medullary carcinoma has plasmacytoid cells with salt-and-pepper chromatin and amyloid. Nodular goitre has uniform follicular cells with watery colloid and does not show grooved overlapping nuclei.",
    "id": 225
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A laboratory reports 400 thyroid aspirates in a quarter, including 60 in the atypia of undetermined significance category. The laboratory's own target for this category is under 10 percent. What conclusion is reasonable?",
    "options": {
      "A": "The rate is 15 percent, which exceeds the target and calls for review of criteria",
      "B": "The rate is 6.7 percent, which is acceptable and requires no action",
      "C": "The rate is 15 percent, which shows that the laboratory is correctly cautious",
      "D": "The rate is 24 percent, which shows the laboratory is under-using the category"
    },
    "answer": "A",
    "explanation": "Sixty out of 400 is 15 percent, above the 10 percent target, so the laboratory should review its criteria, since the category risks becoming a default. A rate of 6.7 percent arises from inverting the fraction, which is a miscalculation. Calling 15 percent correctly cautious ignores a benchmark the laboratory itself set. A rate of 24 percent has no arithmetic basis, and over-use rather than under-use is what a high rate suggests.",
    "id": 226
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A thyroid aspirate shows discohesive plasmacytoid cells with eccentric nuclei and fine salt-and-pepper chromatin, and amorphous pink material in the background that gives apple-green birefringence after Congo red staining. Which marker is most useful to confirm the diagnosis?",
    "options": {
      "A": "Thyroglobulin, which is strongly positive in medullary carcinoma",
      "B": "TTF-1 alone, which excludes any other type of thyroid tumour",
      "C": "Calcitonin, which identifies parafollicular C cell differentiation",
      "D": "BRAF V600E, which defines the diagnosis of medullary carcinoma"
    },
    "answer": "C",
    "explanation": "Plasmacytoid cells with amyloid indicate medullary carcinoma, which is confirmed by calcitonin, CEA and chromogranin. Thyroglobulin is negative in medullary carcinoma because the cells are not follicular. TTF-1 is positive in most thyroid tumours and does not exclude the other types. BRAF V600E is a marker for papillary carcinoma and not for medullary tumours.",
    "id": 227
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A urine specimen is collected as the first void of the morning and held at room temperature for six hours before reaching the laboratory. The cytotechnologist notes smudged nuclei, vacuolated cytoplasm and poor detail. What is the most appropriate response?",
    "options": {
      "A": "Report the cases as high-grade urothelial carcinoma because smudged nuclei are hyperchromatic",
      "B": "Report as unsatisfactory or limited by degeneration, and request a properly collected and preserved sample",
      "C": "Report as negative, since degenerative changes always indicate a benign process",
      "D": "Add formalin to the residual sample and reprocess to restore cell detail"
    },
    "answer": "B",
    "explanation": "Cells degraded by a first-void sample and a delay cannot be judged reliably, so the report states the limitation and a better specimen is requested. Calling carcinoma from smudged degenerated nuclei is a known cause of false-positive results, and the Paris System excludes them. Calling the specimen negative would also overreach, since degeneration can hide real malignant cells. Formalin cannot restore cells already degenerated and may interfere with later processing.",
    "id": 228
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A rapid on-site evaluation of a thyroid aspirate shows sparse follicular cells and a few macrophages, with fewer than the required six groups of ten cells and no atypia. What is the best action?",
    "options": {
      "A": "Report as benign, because macrophages indicate a cystic benign nodule",
      "B": "Report as malignant, because sparse cells show a dyscohesive process",
      "C": "Stop sampling, since further passes would not increase cell numbers",
      "D": "Request additional passes, aiming to meet the adequacy criteria before the patient leaves"
    },
    "answer": "D",
    "explanation": "Rapid evaluation exists to detect an inadequate sample while the patient is present, so the best step is to take more passes, ideally with ultrasound guidance. A benign call from a few macrophages and too few follicular cells would be a false reassurance. A malignant call has no support in sparse bland cells. Stopping is incorrect since further passes often yield enough cells, and the sample so far does not meet adequacy.",
    "id": 229
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A woman with a rapidly enlarging neck mass has an aspirate showing bizarre, pleomorphic, spindle and giant cells with necrosis, and cytokeratin staining is variable. Which diagnosis best fits this presentation?",
    "options": {
      "A": "Anaplastic thyroid carcinoma, an aggressive tumour that usually occurs in older patients",
      "B": "Hashimoto thyroiditis with Hurthle cell change and lymphocytes",
      "C": "Papillary carcinoma with powdery chromatin and nuclear grooves",
      "D": "Subacute granulomatous thyroiditis with giant cells and neutrophils"
    },
    "answer": "A",
    "explanation": "Marked pleomorphism, giant and spindle cells and necrosis in a rapidly growing mass indicate anaplastic carcinoma, usually in older patients. Hashimoto thyroiditis presents with lymphoid cells and Hurthle cells, not bizarre pleomorphic cells. Papillary carcinoma has a distinctive set of fine nuclear features and a more indolent course. Subacute thyroiditis has multinucleated giant cells in an inflammatory background and is typically painful, without bizarre malignant cells.",
    "id": 230
  },
  {
    "domain": "cytology",
    "chapter": 25,
    "question": "A breast aspirate from a 55-year-old woman contains a discohesive population of small, uniform cells with eccentric nuclei and cytoplasmic mucin vacuoles, some with a central target-like droplet. Bare bipolar nuclei are absent. Imaging shows an ill-defined mass. Which interpretation is most appropriate?",
    "options": {
      "A": "Benign fibrocystic change with apocrine cells and foamy macrophages",
      "B": "Lactational change with granular proteinaceous background and foamy cells",
      "C": "Malignant, consistent with lobular carcinoma, with confirmation by core biopsy",
      "D": "Fat necrosis, since vacuolated cells are typical of this lesion"
    },
    "answer": "C",
    "explanation": "Discohesive small monomorphic cells with eccentric nuclei, intracytoplasmic lumina and no bipolar nuclei in an ill-defined mass indicate lobular carcinoma. Fibrocystic change has cohesive clusters with bipolar nuclei and apocrine cells, which differ from this picture. Lactational change occurs with pregnancy or breastfeeding and shows prominent nucleoli and granular background. Fat necrosis contains lipid-laden macrophages and giant cells, not discohesive monomorphic cells with target-like vacuoles.",
    "id": 231
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "A technologist performs rapid on-site evaluation on a thyroid nodule aspirate and finds a thick smear with overlapping cells and a crushed appearance, and many nuclei streaked into thin threads. What is the most likely cause, and what is the best corrective step?",
    "options": {
      "A": "A low-quality stain, corrected by increasing the time in the eosinophilic solution",
      "B": "Bacterial contamination of the needle, corrected by repeating the sample with a sterile syringe",
      "C": "Excess pressure from the spreader slide, corrected by using a lighter touch on the next smear",
      "D": "Over-fixation of the sample, corrected by adding more alcohol to the staining jar"
    },
    "answer": "C",
    "explanation": "Streaked, crushed nuclei result from excessive pressure when spreading the sample, and a lighter, steady motion with a clean spreader slide prevents it. A weak stain would affect colour rather than cause streaking of nuclei. Bacterial contamination would produce organisms in the background and not crushed nuclei. Over-fixation does not occur in a rapid air-dried stain, and extra alcohol would not repair physical distortion.",
    "id": 232
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "A lymph node aspirate shows small mature lymphocytes, intermediate lymphoid cells, scattered immunoblasts, tingible body macrophages and plasma cells, with many lymphoglandular bodies. Which interpretation is most appropriate?",
    "options": {
      "A": "Reactive lymphoid hyperplasia, supported by a polymorphous population and tingible body macrophages",
      "B": "Diffuse large B cell lymphoma, supported by a mixture of cell sizes",
      "C": "Hodgkin lymphoma, supported by plasma cells and immunoblasts in the background",
      "D": "Metastatic small cell carcinoma, supported by lymphoglandular bodies in the smear"
    },
    "answer": "A",
    "explanation": "A mixed lymphoid population with tingible body macrophages and plasma cells is the signature of reactive hyperplasia. Diffuse large B cell lymphoma shows a monotonous population of large cells and few tingible body macrophages. Hodgkin lymphoma requires Reed-Sternberg cells in a mixed background, and plasma cells and immunoblasts alone do not establish it. Small cell carcinoma consists of moulded epithelial cells with crush artefact, and lymphoglandular bodies indicate lymphoid tissue, not carcinoma.",
    "id": 233
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "A flow cytometry study on a lymph node aspirate shows a B cell population with kappa to lambda ratio of 12 to 1 and a high proportion of CD10-positive cells. Which statement is accurate?",
    "options": {
      "A": "The ratio is normal, because kappa chains normally predominate over lambda chains by this much",
      "B": "The ratio indicates a reactive process, because light chains are expressed on all B cells",
      "C": "The ratio is unremarkable, since light chain restriction cannot be assessed by flow cytometry",
      "D": "The ratio suggests a clonal B cell population, which needs correlation with morphology and other studies"
    },
    "answer": "D",
    "explanation": "A normal ratio is roughly 1 to 3, so 12 to 1 shows light chain restriction, which points to clonality and is interpreted with morphology and other markers. Kappa does not normally outnumber lambda by this margin. Reactive B cells express both light chains in a polyclonal ratio, so a ratio this skewed does not indicate a reactive process. Light chain restriction is assessed routinely by flow cytometry and is among its principal uses.",
    "id": 234
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "A parotid aspirate shows cohesive bland epithelial and myoepithelial cells embedded in fibrillar, bright magenta matrix on a Romanowsky stain. Which diagnosis is best supported?",
    "options": {
      "A": "Warthin tumour, with oncocytes and lymphoid cells in a cystic background",
      "B": "Pleomorphic adenoma, a benign tumour with chondromyxoid stroma",
      "C": "Adenoid cystic carcinoma, with hyaline globules surrounded by basaloid cells",
      "D": "Mucoepidermoid carcinoma, with mucinous and squamoid cells in a mucin background"
    },
    "answer": "B",
    "explanation": "Epithelial and myoepithelial cells in a fibrillar magenta chondromyxoid matrix characterize pleomorphic adenoma. Warthin tumour shows oncocytes, lymphocytes and cystic debris, not magenta matrix. Adenoid cystic carcinoma shows well-defined, round hyaline globules with basaloid cells around them. Mucoepidermoid carcinoma is characterized by mucin, goblet-like cells and squamoid cells, not a fibrillar matrix.",
    "id": 235
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "An endoscopic ultrasound-guided aspirate from a pancreatic mass shows crowded, disorganized cell groups with loss of polarity, nuclear size variation greater than four to one, irregular nuclear membranes and a necrotic background. What is the most appropriate category?",
    "options": {
      "A": "Positive for malignancy, consistent with pancreatic ductal adenocarcinoma",
      "B": "Negative for malignancy, consistent with chronic pancreatitis",
      "C": "Neoplastic benign, consistent with serous cystadenoma",
      "D": "Nondiagnostic, since the aspirate shows necrosis and disorganized clusters"
    },
    "answer": "A",
    "explanation": "Disorganized groups, a drunken honeycomb pattern, marked nuclear size variation and irregular membranes with necrosis are typical of ductal adenocarcinoma. Chronic pancreatitis shows regular honeycomb sheets with mild changes, so it does not explain this variation. Serous cystadenoma has bland cuboidal cells in a cystic setting with low CEA. A sample with diagnostic malignant cells is adequate, and necrosis does not make it nondiagnostic.",
    "id": 236
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "A pancreatic cyst aspirate shows fluid CEA of 640 ng/mL and low amylase, with scant mucinous epithelial cells on cytology. What does this finding most strongly suggest?",
    "options": {
      "A": "Pancreatic pseudocyst, since low amylase is typical of pseudocysts",
      "B": "Serous cystadenoma, since a high CEA is a feature of serous tumours",
      "C": "A mucinous cyst, since an elevated CEA favours mucinous over non-mucinous lesions",
      "D": "Pancreatic neuroendocrine tumour, since this is defined by a raised CEA"
    },
    "answer": "C",
    "explanation": "A CEA well above about 192 ng/mL favours a mucinous cyst, and mucinous cells support this, though malignancy must still be assessed. A pseudocyst communicates with the duct and typically has high amylase, not low. Serous cystadenoma characteristically has low CEA. Neuroendocrine tumours are diagnosed by cell morphology and synaptophysin or chromogranin, not by cyst fluid CEA.",
    "id": 237
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "A cytology series shows that, among 80 histologically proven malignant cases, 72 were reported malignant by cytology, and among 60 benign cases, 57 were reported benign. What is the sensitivity of cytology in this series?",
    "options": {
      "A": "95 percent, which is the proportion of benign cases correctly identified",
      "B": "63 percent, which is the proportion of all cases with a correct report",
      "C": "80 percent, which is the proportion of malignant cases not missed by histology",
      "D": "90 percent, which is the proportion of malignant cases correctly identified by cytology"
    },
    "answer": "D",
    "explanation": "Sensitivity is the true positives divided by all malignant cases, so 72 divided by 80 equals 90 percent. The value of 95 percent is the specificity, calculated as 57 divided by 60. The figure of 63 percent has no basis in these data and appears to mix unrelated counts. The 80 percent figure is the number of malignant cases, not a proportion, and the sensitivity is not defined relative to histology misses.",
    "id": 238
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "During an EBUS procedure at station 7, the smears contain bronchial epithelial cells, blood and anthracotic macrophages but no lymphocytes. What should the cytologist advise?",
    "options": {
      "A": "Report the node as negative for malignancy and end the procedure",
      "B": "Advise further passes, since the absence of lymphocytes suggests the node has not been sampled",
      "C": "Report the node as benign sarcoidosis, since anthracotic pigment indicates granulomatous disease",
      "D": "Report the sample as suspicious because blood suggests a vascular tumour"
    },
    "answer": "B",
    "explanation": "A node sample should contain lymphocytes, so their absence means the needle probably missed the node and more passes are needed. Calling it negative would produce a false-negative staging result. Anthracotic pigment is common in mediastinal nodes and is not diagnostic of sarcoidosis, which requires granulomas. Blood alone is not a sign of a vascular tumour and does not make a specimen suspicious.",
    "id": 239
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "A small round blue cell tumour aspirate from the thigh of a 14-year-old shows uniform cells with fine chromatin and glycogen-rich cytoplasm, and the cells show strong membranous CD99 staining. Which diagnosis is most consistent?",
    "options": {
      "A": "Alveolar rhabdomyosarcoma with desmin and myogenin positivity",
      "B": "Neuroblastoma with rosettes and elevated urinary catecholamines",
      "C": "Ewing sarcoma, which often carries an EWSR1 gene rearrangement",
      "D": "Diffuse large B cell lymphoma with CD20 positivity"
    },
    "answer": "C",
    "explanation": "Uniform round cells with glycogen-rich cytoplasm and membranous CD99 are the profile of Ewing sarcoma, confirmed by EWSR1 rearrangement. Rhabdomyosarcoma shows desmin and myogenin and cells with eccentric nuclei. Neuroblastoma presents with rosettes and neuropil and occurs in younger children with synaptophysin and PHOX2B positivity. Lymphoma expresses CD45 and B cell markers, and does not show strong membranous CD99 together with glycogen.",
    "id": 240
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "A thick-walled neck cyst in a 58-year-old man yields fluid with scattered keratinized squamous cells, some with mildly atypical nuclei, and a few lymphocytes. What is the best next step?",
    "options": {
      "A": "Investigate for a metastatic squamous carcinoma, including oropharyngeal HPV-associated disease",
      "B": "Reassure the patient, since a branchial cleft cyst is the usual explanation in this age group",
      "C": "Treat with antibiotics for presumed infection and repeat the aspirate after one month",
      "D": "Report as nondiagnostic because cyst fluid cannot be evaluated by cytology"
    },
    "answer": "A",
    "explanation": "A cystic neck node with atypical squamous cells in an older adult is a classic presentation of metastatic squamous carcinoma, notably HPV-associated oropharyngeal disease, so a search for a primary is needed. Calling it a branchial cleft cyst in this age group is a diagnosis of exclusion and a risky assumption. Antibiotics and a delayed repeat are inappropriate when atypical cells are present. Cyst fluid with atypical squamous cells is diagnostic material and not nondiagnostic.",
    "id": 241
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "A liver aspirate shows polygonal cells with round central nuclei, prominent nucleoli, bile pigment, and thick trabecular fragments wrapped by endothelial cells. Which stain best supports the diagnosis?",
    "options": {
      "A": "Calretinin, supporting mesothelial origin of the lesion",
      "B": "TTF-1, supporting pulmonary adenocarcinoma metastatic to the liver",
      "C": "CDX2, supporting colorectal adenocarcinoma metastatic to the liver",
      "D": "Arginase-1, supporting hepatocellular carcinoma"
    },
    "answer": "D",
    "explanation": "Bile, trabecular fragments wrapped by endothelium and hepatocyte-like cells indicate hepatocellular carcinoma, and arginase-1 and HepPar-1 support hepatocellular differentiation. Calretinin marks mesothelium and has no role here. TTF-1 would indicate lung or thyroid origin. CDX2 would indicate gastrointestinal origin, and the morphology described points to hepatocytes, not intestinal glands.",
    "id": 242
  },
  {
    "domain": "cytology",
    "chapter": 26,
    "question": "A specimen from fine needle aspiration of a suspected lymphoma is placed in formalin at the bedside, and the laboratory is asked to perform flow cytometry. What is the correct response?",
    "options": {
      "A": "Proceed with flow cytometry, since formalin preserves surface antigens on live cells",
      "B": "Culture the specimen for 24 hours so that cells recover from fixation",
      "C": "Perform flow cytometry on the supernatant only, since cells have lysed",
      "D": "Explain that fixed cells cannot be used for flow cytometry and request a fresh sample in RPMI"
    },
    "answer": "D",
    "explanation": "Flow cytometry needs fresh, viable, unfixed cells in a suitable medium such as RPMI, so the sample in formalin cannot be used, though it can serve for a cell block. Formalin does not preserve live-cell surface antigens in the way flow cytometry requires. Culturing fixed cells cannot revive them. The supernatant of a fixed sample does not contain a usable intact population for analysis.",
    "id": 243
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A technologist prepares a cell block from a pleural effusion by mixing the pellet with plasma and thrombin to form a clot. For subsequent immunostains and molecular testing, what is the most suitable fixative and duration?",
    "options": {
      "A": "Ninety-five percent ethanol for one hour, to maximize nuclear detail",
      "B": "Ten percent neutral buffered formalin, usually for 6 to 72 hours",
      "C": "Acid decalcifying solution for several hours, to soften the clot for cutting",
      "D": "Unbuffered formalin for two weeks, to guarantee complete antigen preservation"
    },
    "answer": "B",
    "explanation": "Neutral buffered formalin for a controlled period is the standard for cell blocks that will be used for immunostains and molecular tests, because it preserves morphology and nucleic acids without excessive masking. Alcohol may preserve nuclear detail but is not the validated standard for these assays. Acid decalcifiers damage DNA and are avoided for molecular material. Prolonged fixation over many days masks antigens and fragments nucleic acids, so more time does not improve results.",
    "id": 244
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A laboratory needs to prepare 500 microlitres of a 1 in 200 working dilution of a primary antibody. How much antibody and diluent should be combined?",
    "options": {
      "A": "5.0 microlitres of antibody and 495 microlitres of diluent",
      "B": "0.5 microlitre of antibody and 499.5 microlitres of diluent",
      "C": "25 microlitres of antibody and 475 microlitres of diluent",
      "D": "2.5 microlitres of antibody and 497.5 microlitres of diluent"
    },
    "answer": "D",
    "explanation": "A 1 in 200 dilution means 1 part antibody per 200 parts total, so 500 divided by 200 equals 2.5 microlitres of antibody with 497.5 of diluent. The first amount would give a 1 in 100 dilution, twice as concentrated as required. The second amount would give 1 in 1000, five times too dilute. The third amount would give a 1 in 20 dilution, ten times too concentrated, and would cause overstaining and cost.",
    "id": 245
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "An immunostain panel on a carcinoma in an effusion shows negative staining in all markers, including the positive external control, which also failed to stain. What is the most appropriate conclusion?",
    "options": {
      "A": "The run is invalid, because the positive control failed, so the negative results cannot be interpreted",
      "B": "The tumour is negative for all markers and the result can be reported as undifferentiated carcinoma",
      "C": "The tumour is of unknown origin and should be reported as a benign process",
      "D": "The stain worked correctly because negative cases normally show no internal staining"
    },
    "answer": "A",
    "explanation": "If the positive control fails, the stain did not work, so a negative result in the patient sample is not reliable and the run must be repeated after troubleshooting. Reporting an undifferentiated carcinoma on the basis of a failed run would give wrong information. Calling the case benign has no basis. A properly working stain should show the expected staining in positive and internal controls, so a total absence of staining indicates a problem.",
    "id": 246
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A cell block from a lung adenocarcinoma contains 30 percent tumour cells, and the tumour carries a heterozygous EGFR mutation. The assay has a limit of detection of 5 percent variant allele fraction. What variant allele fraction is expected, and can it be detected?",
    "options": {
      "A": "About 30 percent, which is well above the detection limit of the assay",
      "B": "About 60 percent, which is above the limit of detection of the assay",
      "C": "About 15 percent, which is above the detection limit of the assay",
      "D": "About 7.5 percent, which is below the detection limit of the assay"
    },
    "answer": "C",
    "explanation": "A heterozygous mutation occupies half of the alleles in tumour cells, so 30 percent tumour gives 15 percent mutant alleles, above the 5 percent limit, so detection is expected. Giving 30 percent forgets that only one of two alleles is mutant. Giving 60 percent doubles instead of halving. A figure of 7.5 percent applies a further factor of one half and is wrongly placed below a limit that the real value exceeds.",
    "id": 247
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A technologist cuts sections from a cell block for a molecular test immediately after cutting a different, highly mutated tumour block, using the same blade and a water bath that has not been cleaned. What is the greatest risk?",
    "options": {
      "A": "Loss of staining intensity in the hematoxylin and eosin section",
      "B": "Cross-contamination that could produce a false-positive molecular result",
      "C": "Formation of air bubbles under the section during mounting",
      "D": "Excess formalin fixation of the tissue during the cutting step"
    },
    "answer": "B",
    "explanation": "A few cells carried over on a blade or in the water bath can contribute DNA that is detected by a sensitive assay, giving a false positive, so disposable blades and a clean water bath are required. Loss of staining intensity is not caused by cross-contamination. Bubbles under a section are a mounting problem, not a risk of misdiagnosis. Formalin fixation takes place before cutting and is unaffected by the blade or the water bath.",
    "id": 248
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A lung biopsy imprint is being examined for suspected tuberculosis, and a necrotizing granuloma is seen. Which step should the cytologist ensure takes place before the remaining fresh material is fixed?",
    "options": {
      "A": "A portion should be sent for acid-fast stain and mycobacterial culture",
      "B": "The sample should be placed immediately in alcohol for a Papanicolaou stain",
      "C": "The tissue should be frozen for oil red O staining of mycobacterial lipids",
      "D": "The sample should be dried and stained with Prussian blue to detect hemosiderin"
    },
    "answer": "A",
    "explanation": "Necrotizing granulomas suggest tuberculosis or fungus, and culture needs unfixed material, so a portion is sent for acid-fast stain and culture before fixation. Alcohol fixation would kill organisms and prevent culture. Oil red O is used for fat and is not a tool to identify mycobacteria. Prussian blue detects hemosiderin and has no role in identifying the cause of a granuloma.",
    "id": 249
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A laboratory audits 150 cases reported as atypical, of which 100 have histologic follow-up. Of those, 22 show malignancy. The published risk range for the category is 13 to 30 percent. What is the best conclusion?",
    "options": {
      "A": "The observed risk is 15 percent, which is below the published range",
      "B": "The observed risk is 22 percent of all 150 cases, which is below the published range",
      "C": "The observed risk is 30 percent, which is at the top of the range and needs review",
      "D": "The observed risk is 22 percent, which is within the published range"
    },
    "answer": "D",
    "explanation": "Risk is calculated among cases with follow-up, so 22 divided by 100 is 22 percent, which lies within 13 to 30 percent. Calling it 15 percent divides by the wrong denominator, using all 150 cases. Using 150 as the denominator also gives a figure of about 15 percent, which is wrong for the same reason, and it would wrongly suggest a low risk. A value of 30 percent does not follow from the numbers given.",
    "id": 250
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A laboratory rescreens a random 10 percent of 4,000 negative slides in a month. The rescreen finds 8 slides with a significant missed abnormality. What is the false-negative proportion among rescreened slides?",
    "options": {
      "A": "0.2 percent, calculated by dividing 8 by 4,000",
      "B": "8 percent, calculated by dividing 8 by 100",
      "C": "2 percent, calculated by dividing 8 by 400",
      "D": "20 percent, calculated by dividing 8 by 40"
    },
    "answer": "C",
    "explanation": "Ten percent of 4,000 is 400 slides rescreened, so the proportion is 8 divided by 400, or 2 percent. Dividing by the whole 4,000 ignores that only a sample was rescreened. Dividing by 100 and dividing by 40 use denominators that do not correspond to the number of slides rescreened, giving inflated figures.",
    "id": 251
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A suspected lymphoma aspirate is collected in a sterile tube in RPMI and left on a bench over a weekend before delivery on Monday. What is the most likely consequence for flow cytometry?",
    "options": {
      "A": "Cells will have lost viability, giving unreliable or failed results",
      "B": "Cells will have been fixed, which improves surface antigen staining",
      "C": "Cells will have multiplied, which improves the quality of the analysis",
      "D": "Cells will remain fully viable because RPMI preserves them for several days"
    },
    "answer": "A",
    "explanation": "Flow cytometry needs viable cells, and viability falls after about 24 hours, so a delay of two or three days gives unreliable or failed results. RPMI does not fix cells, and fixing would not improve live-cell antigen staining. Cells do not multiply in a transport tube without culture conditions. RPMI keeps cells in the short term and does not preserve them fully for several days.",
    "id": 252
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A technologist is reporting a special stain for fungi. The positive control slide does not show any organisms, but the patient slide shows several black budding structures. What should be done?",
    "options": {
      "A": "Report the result, because the patient slide shows organisms",
      "B": "Reject the run and repeat, because the control failed and the stain cannot be trusted",
      "C": "Report the result but add a note that the control did not stain",
      "D": "Discard the patient slide and request a new specimen from the clinician"
    },
    "answer": "B",
    "explanation": "A failed positive control means the stain did not perform as validated, so the run must be repeated, even though the patient slide has structures that look positive. Reporting from an uncontrolled run risks a wrong result, and adding a note does not fix that. Discarding the slide and asking for a new specimen is wasteful, since the original material can be restained.",
    "id": 253
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A cytology report for a pleural effusion in a patient with no previous cancer history states malignant cells present, consistent with adenocarcinoma. What is the correct way to communicate this result?",
    "options": {
      "A": "Mail a copy of the report to the clinician within the usual turnaround time",
      "B": "Wait for the next weekly tumour board meeting to announce the result",
      "C": "Add the result to the laboratory information system and take no further action",
      "D": "Telephone the clinician directly, document the call and the read-back, and issue the report"
    },
    "answer": "D",
    "explanation": "A new diagnosis of malignancy is a significant result that should be communicated directly to the clinician with documentation, in addition to the written report. Mailing a copy risks delay. Waiting for a weekly meeting delays patient care. Entering the result only into the laboratory system without active communication relies on the clinician checking and may miss urgency.",
    "id": 254
  },
  {
    "domain": "cytology",
    "chapter": 27,
    "question": "A cytologist wants to reduce false-positive reports in non-gynecologic cytology. Which approach is most consistent with good practice?",
    "options": {
      "A": "Report any atypical cell group as malignant to avoid missing a cancer",
      "B": "Avoid the use of ancillary tests, since they increase the cost per case",
      "C": "Use an indeterminate category when features are borderline, and correlate with histology and imaging",
      "D": "Report only the cases with a known cancer history as malignant"
    },
    "answer": "C",
    "explanation": "An indeterminate category such as atypical or suspicious, backed by correlation with imaging, histology and ancillary tests, prevents overcalling while keeping the patient under evaluation. Reporting all atypical groups as malignant would increase false positives, which can lead to unnecessary surgery. Avoiding ancillary tests removes the information that often settles a borderline case. Restricting malignant reports to patients with a known history would miss new primaries.",
    "id": 255
  },
  {
    "domain": "cytogenetics",
    "chapter": 28,
    "question": "A technologist receives a peripheral blood specimen for a constitutional chromosome study. The tube has a lavender top and contains EDTA. The patient is a newborn with suspected Down syndrome and a repeat sample will be difficult to obtain. What is the most appropriate first action?",
    "options": {
      "A": "Set up the culture as usual, since EDTA does not affect lymphocyte division",
      "B": "Freeze the specimen at minus 20 degrees Celsius until a heparinized tube is available",
      "C": "Contact the provider, document the unacceptable anticoagulant, and request a sodium heparin recollection",
      "D": "Add extra calcium chloride to the EDTA tube to restore the culture medium"
    },
    "answer": "C",
    "explanation": "EDTA chelates calcium and magnesium and prevents lymphocytes from responding to mitogen, so the specimen should not be set up as if it were acceptable. Freezing kills the lymphocytes and makes the sample useless for culture. Adding calcium to an EDTA tube does not reliably reverse the damage and is not a validated procedure. Documenting the problem and arranging a sodium heparin collection is the standard response, with a supervisor involved if the recollection is difficult.",
    "id": 256
  },
  {
    "domain": "cytogenetics",
    "chapter": 28,
    "question": "A bone marrow aspirate from a patient with suspected acute myeloid leukemia is set up in unstimulated cultures of 24 and 48 hours. A colleague suggests adding phytohemagglutinin to the cultures to boost cell division. Which statement best explains why this should not be done?",
    "options": {
      "A": "Phytohemagglutinin stimulates T cells, diluting the myeloid clone with normal lymphocyte mitoses",
      "B": "Phytohemagglutinin is toxic to myeloid cells and kills them within a few hours",
      "C": "Marrow cells cannot enter mitosis at all in the presence of any plant lectin",
      "D": "Phytohemagglutinin interferes with colcemid binding to tubulin in the dividing marrow cells"
    },
    "answer": "A",
    "explanation": "Myeloid blasts in marrow are already cycling, so a mitogen is unneeded, and a T-cell mitogen would mainly expand the normal lymphocytes and mask the abnormal clone. The lectin is not specifically toxic to myeloid cells, and it does not prevent them dividing. It also has no effect on colcemid binding, which depends on tubulin and not on the lectin. Unstimulated short cultures remain the usual approach for myeloid disease.",
    "id": 257
  },
  {
    "domain": "cytogenetics",
    "chapter": 28,
    "question": "A technologist prepares a 10 mL blood culture and needs a final colcemid concentration of 0.05 micrograms per mL. The colcemid stock is 10 micrograms per mL. What volume of stock should be added?",
    "options": {
      "A": "Add 0.5 mL of the stock solution to the culture, giving ten times the target",
      "B": "Add 0.01 mL of the stock solution, a fifth of the volume actually needed",
      "C": "Add 0.005 mL of the stock solution, one tenth of the volume actually needed",
      "D": "Add 0.05 mL of the stock solution to the culture, applying C1V1 equals C2V2"
    },
    "answer": "D",
    "explanation": "Using C1V1 = C2V2, V1 = (0.05 x 10) / 10 = 0.05 mL, which is the correct volume of stock. A volume of 0.5 mL, ten times larger, would give a final concentration of 0.5 micrograms per mL and over-condense the chromosomes. A volume of 0.01 mL would give 0.01 micrograms per mL, too low to arrest enough cells. A volume of 0.005 mL would be lower still and would produce a poor mitotic index.",
    "id": 258
  },
  {
    "domain": "cytogenetics",
    "chapter": 28,
    "question": "A blood culture harvest produces many metaphases, but the chromosomes appear fuzzy, swollen and poorly defined after G-banding, with little contrast between dark and light bands. The slides were made the previous afternoon and were stained only 3 hours after being prepared. Which is the most likely explanation?",
    "options": {
      "A": "The hypotonic solution was too concentrated, giving shrunken and overlapping chromosomes",
      "B": "The slides were under-aged, so trypsin digestion was insufficient",
      "C": "The colcemid exposure was too short, producing poorly condensed chromosomes",
      "D": "The Giemsa stain was contaminated with a bacterial overgrowth during storage"
    },
    "answer": "B",
    "explanation": "Fresh, unaged slides resist trypsin, so they are under-digested and give fuzzy, poorly banded chromosomes, which is why slides are aged overnight or heated before staining. A hypotonic that was too concentrated would cause under-swelling and clustering, not a loss of band contrast on well-spread chromosomes. Short colcemid exposure leads to longer chromosomes, which is a different problem and does not blur banding. Bacterial contamination of stain would show particles on the slide rather than fuzzy chromosome outlines.",
    "id": 259
  },
  {
    "domain": "cytogenetics",
    "chapter": 28,
    "question": "Amniotic fluid cultured in two independent flasks shows one cell with trisomy 8 in the first flask and no abnormal cells in the second flask, among 30 cells analyzed. How should this finding be classified?",
    "options": {
      "A": "True mosaicism, requiring a report of mosaic trisomy 8",
      "B": "Level III mosaicism, supported by two independent cultures",
      "C": "Maternal cell contamination, because the cell is a single clone",
      "D": "Level I pseudomosaicism, usually regarded as a culture artefact"
    },
    "answer": "D",
    "explanation": "A single abnormal cell in one culture is Level I pseudomosaicism and is generally attributed to an in vitro event, not a fetal finding. True mosaicism would be suggested by the same abnormality in multiple cells and in multiple independent cultures. Level III requires the abnormality in at least two independent cultures, and that was not seen here. Maternal contamination would give a maternal karyotype, not a trisomy 8 cell in a normal background.",
    "id": 260
  },
  {
    "domain": "cytogenetics",
    "chapter": 28,
    "question": "A laboratory receives a chorionic villus sample at 11 weeks of gestation. Before culture, the technologist spends time under a dissecting microscope separating the villi from other tissue. What is the main purpose of this step?",
    "options": {
      "A": "To count the villi so the mitotic index can be calculated correctly later",
      "B": "To remove maternal decidua that could overgrow the culture and falsify results",
      "C": "To stain the villi so that they can be seen more clearly",
      "D": "To trypsinize the villi and release the cytotrophoblast cells before harvest"
    },
    "answer": "B",
    "explanation": "Maternal decidua is the main source of contamination in CVS, and removing it protects against an incorrect karyotype from maternal cells. Villus counting is not part of calculating the mitotic index, which is based on dividing cells among total cells. Staining under the dissecting microscope is not a routine step. Trypsinization is part of later processing for cultured preparations and is not the purpose of dissection.",
    "id": 261
  },
  {
    "domain": "cytogenetics",
    "chapter": 28,
    "question": "A laboratory notes a rise in cultures with a yellow phenol red colour and cloudy medium over one week across several unrelated patients. All cultures used the same lot of fetal bovine serum opened five days earlier. What is the best next step?",
    "options": {
      "A": "Continue using the serum, since colour change is expected after several days in culture",
      "B": "Add extra antibiotics to every culture, as the contamination is likely minor",
      "C": "Quarantine the serum lot, test its sterility, and review aseptic technique and incubator records",
      "D": "Switch all cultures to a lower incubator temperature to slow bacterial growth"
    },
    "answer": "C",
    "explanation": "Cloudy, yellow medium in multiple cultures that share a reagent points to a possible contaminated lot and requires a systematic investigation. Yellow colour is a sign of bacterial acid production, not a normal event. Extra antibiotics mask contamination, and do not address the cause, and may impair culture. Lowering the incubator temperature would hurt the cells of interest more than the bacteria, and it is not an accepted corrective action.",
    "id": 262
  },
  {
    "domain": "cytogenetics",
    "chapter": 28,
    "question": "A 56-year-old patient with chronic lymphocytic leukemia has a bone marrow sent for cytogenetics. A PHA-stimulated culture shows a normal 46,XY karyotype in all 20 cells. The hematologist suspects the result does not reflect the leukemic clone. What is the best explanation and remedy?",
    "options": {
      "A": "The leukemic cells were killed by colcemid, so a lower dose should be used",
      "B": "The patient has no abnormal clone, and no further testing is needed",
      "C": "PHA stimulated normal T cells, so a B-cell mitogen such as CpG is needed",
      "D": "Banding was done at too low a resolution, so the harvest should be extended"
    },
    "answer": "C",
    "explanation": "CLL cells are mature B cells that divide poorly in response to PHA, so a PHA culture favours normal T lymphocytes and gives a falsely normal karyotype. A B-cell mitogen combination stimulates the malignant clone to divide and reveals abnormalities such as deletion of 13q or 11q, or trisomy 12. Colcemid is not preferentially toxic to the leukemic cells. Declaring the patient clone-free ignores the culture bias, and resolution is not the main issue when the target cells are not dividing.",
    "id": 263
  },
  {
    "domain": "cytogenetics",
    "chapter": 28,
    "question": "A technologist is reviewing slides from a peripheral blood culture. Among 1,000 cells scored, 45 are in mitosis. The laboratory's acceptable range for mitotic index in PHA blood cultures is 3 to 7 percent. What should be concluded?",
    "options": {
      "A": "The mitotic index is 4.5 percent, which is within the acceptable range",
      "B": "The mitotic index is 45 percent, which is too high and signals contamination",
      "C": "The mitotic index is 0.45 percent, which is too low and requires a new culture",
      "D": "The mitotic index cannot be calculated without the number of metaphases analyzed"
    },
    "answer": "A",
    "explanation": "Mitotic index equals the number of cells in mitosis divided by the total cells scored, times 100, which gives 45 / 1,000 x 100 = 4.5 percent. That sits within the 3 to 7 percent range, so the culture is performing as expected. A value of 45 percent would require misplacing the decimal and is not realistic for a blood culture. A value of 0.45 percent would result from a second division by 10. The calculation does not need the number of metaphases analyzed, only the cells scored.",
    "id": 264
  },
  {
    "domain": "cytogenetics",
    "chapter": 29,
    "question": "A technologist reads a bone marrow karyotype from a 45-year-old patient with suspected chronic myeloid leukemia. Eighteen of 20 cells show 46,XY,t(9;22)(q34;q11.2) and two cells are 46,XY. Which description of the finding is correct?",
    "options": {
      "A": "A reciprocal translocation between chromosomes 9 and 22, consistent with the Philadelphia chromosome",
      "B": "A Robertsonian translocation between chromosomes 9 and 22, giving a balanced carrier state",
      "C": "A paracentric inversion of chromosome 9 with a pericentric inversion of chromosome 22",
      "D": "An unbalanced deletion of the long arm of chromosome 22 with gain of chromosome 9"
    },
    "answer": "A",
    "explanation": "The notation t(9;22) with two sets of breakpoints describes a reciprocal exchange of segments between the long arms of two different chromosomes, and it is the Philadelphia chromosome that creates BCR::ABL1. Robertsonian translocations involve only acrocentric chromosomes fusing at their centromeres, and chromosome 9 is not acrocentric. Inversions occur within one chromosome, so they are not described by a translocation symbol. The finding is balanced at the cytogenetic level, and does not represent a net gain or loss of a whole chromosome.",
    "id": 265
  },
  {
    "domain": "cytogenetics",
    "chapter": 29,
    "question": "A couple has had three first-trimester miscarriages. The husband's blood shows 45,XY,der(14;21)(q10;q10), and the wife's karyotype is normal. Which statement best explains the miscarriages and the risk for a liveborn child?",
    "options": {
      "A": "He has an unbalanced karyotype, and all of his children will have Down syndrome",
      "B": "The result is an artefact of culture and should be repeated on bone marrow",
      "C": "The carrier state has no reproductive effect and is unrelated to the miscarriages",
      "D": "He is a balanced carrier, so unbalanced gametes cause miscarriage or Down syndrome"
    },
    "answer": "D",
    "explanation": "A Robertsonian translocation carrier has 45 chromosomes but a normal amount of genetic material, so he is healthy, though meiosis yields unbalanced gametes that cause pregnancy loss or a child with translocation trisomy 21. All of his children are not affected, since normal and balanced gametes are also formed. Culture artefact does not produce the same finding in all cells, and the result does not require a bone marrow. The reproductive consequence is the main reason the finding is clinically important.",
    "id": 266
  },
  {
    "domain": "cytogenetics",
    "chapter": 29,
    "question": "An analyst counts 30 cells in a blood study for suspected mosaic Turner syndrome and finds all cells to be 46,XX. Which conclusion is best supported by this analysis?",
    "options": {
      "A": "Mosaicism of 10 percent or more is excluded with about 95 percent confidence",
      "B": "Mosaicism of any level is excluded because all thirty cells examined are normal",
      "C": "Mosaicism of 1 percent is excluded with 95 percent confidence by this count",
      "D": "Mosaicism cannot be assessed unless at least 100 cells are counted in the study"
    },
    "answer": "A",
    "explanation": "The chance that 30 cells are all normal when 10 percent are abnormal is 0.9 to the 30th power, about 4 percent, so a 10 percent mosaic is excluded at roughly the 95 percent level. Counting 30 cells cannot exclude lower levels, as a 1 percent mosaic would be missed in most such studies, and so low-level mosaicism is not ruled out. Mosaicism assessment depends on probability and is possible with fewer than 100 cells, with the stated confidence. A clean count therefore gives a quantified exclusion and not a total one.",
    "id": 267
  },
  {
    "domain": "cytogenetics",
    "chapter": 29,
    "question": "A karyotype is written 47,XX,+21 in a newborn girl with hypotonia and a heart murmur. In a second case, the same clinical picture is found in a baby with 46,XY,der(14;21)(q10;q10),+21. What is the key difference between these two findings for family counselling?",
    "options": {
      "A": "The first is a mosaic result and the second is a pure trisomy",
      "B": "The first finding always has a higher recurrence risk than the second one",
      "C": "The second finding needs parental karyotypes, since a parent may be a balanced carrier",
      "D": "The second finding is not Down syndrome since the chromosome number is 46"
    },
    "answer": "C",
    "explanation": "Translocation Down syndrome can be inherited from a balanced carrier parent, so parental karyotyping defines the recurrence risk, which can be substantial. Free trisomy 21 usually results from a nondisjunction event and has a low recurrence risk, so the claim that free trisomy carries the higher recurrence risk is reversed. Neither result is mosaic, because each has a single cell line in the notation given. A count of 46 does not exclude Down syndrome, as the extra chromosome 21 is attached to chromosome 14, and the person still has three copies of the genetic material.",
    "id": 268
  },
  {
    "domain": "cytogenetics",
    "chapter": 29,
    "question": "In a 62-year-old patient with acute myeloid leukemia, a laboratory reports 45,XX,-7[3]/46,XX[17]. The supervisor asks whether the monosomy 7 can be called a clone. What is the correct answer?",
    "options": {
      "A": "Yes, since a loss seen in at least three cells meets the clonal definition",
      "B": "No, since a clone requires the same loss in at least ten cells",
      "C": "No, since all chromosome losses are artefacts unless confirmed by microarray testing",
      "D": "Yes, but only if the same loss is also seen in a second culture"
    },
    "answer": "A",
    "explanation": "By ISCN convention, a loss of the same chromosome in three or more cells defines a clone, while a gain or structural change needs only two cells. The requirement of ten cells has no basis in the convention. Chromosome loss can be an artefact when seen in a single cell, but it is accepted when three cells agree, with no need for array confirmation. A second culture can add confidence, but it is not required for the definition.",
    "id": 269
  },
  {
    "domain": "cytogenetics",
    "chapter": 29,
    "question": "A technologist is asked to write the karyotype for a female with a deletion of the long arm of chromosome 5 between bands q13 and q33. Which notation is correct?",
    "options": {
      "A": "46,XX,t(5;5)(q13;q33), the symbol for an exchange of segments between two chromosomes",
      "B": "46,XX,inv(5)(q13q33), the symbol for a segment reversed in orientation without loss",
      "C": "46,XX,del(5)(q13q33), the symbol for loss of the segment between two breakpoints",
      "D": "46,XX,dup(5)(q13q33), the symbol for an extra copy of the segment between breakpoints"
    },
    "answer": "C",
    "explanation": "The del symbol with the chromosome in the first parentheses and the two breakpoints in the second describes loss of the segment between those bands. The t symbol would describe an exchange with another chromosome and cannot refer to the same chromosome twice in this way. The inv symbol describes a segment reversed in orientation, with no loss. The dup symbol would describe an extra copy of the same segment, which is a gain, not a loss.",
    "id": 270
  },
  {
    "domain": "cytogenetics",
    "chapter": 29,
    "question": "A bone marrow from a 38-year-old woman with bruising and a markedly low platelet count shows t(15;17)(q24;q21) in 16 of 20 cells. What should the technologist do first?",
    "options": {
      "A": "Complete the analysis of the remaining slides and issue the report in the usual turnaround time",
      "B": "Repeat the culture to confirm the finding before telling anyone",
      "C": "Send the case for outside FISH confirmation and wait for the result",
      "D": "Notify the supervisor and the responsible hematologist by telephone right away, and document it"
    },
    "answer": "D",
    "explanation": "The t(15;17) identifies acute promyelocytic leukemia, a medical emergency with high early bleeding risk where treatment with retinoic acid must start without delay, so the result is a critical value. Waiting for the regular turnaround or for confirmatory work would delay therapy. A repeat culture adds days and is not needed in the face of the finding in 16 cells. Confirmation can follow, but the first step is immediate communication with documentation of who received the information.",
    "id": 271
  },
  {
    "domain": "cytogenetics",
    "chapter": 29,
    "question": "A routine blood karyotype in a couple with infertility shows 46,XY,inv(9)(p12q13) in the husband, and a normal result in the wife. How should the finding be interpreted?",
    "options": {
      "A": "A pathogenic pericentric inversion, requiring prenatal diagnosis in every pregnancy",
      "B": "A common heteromorphic variant with no clinical significance, reported as normal",
      "C": "A reciprocal translocation, requiring family studies of his siblings and parents",
      "D": "A mosaic deletion, requiring a bone marrow study to confirm the finding"
    },
    "answer": "B",
    "explanation": "The inversion of the heterochromatin region of chromosome 9, inv(9)(p12q13), is one of the most frequent heteromorphisms and is found in about 1 to 3 percent of people, with no known effect on health or fertility. Treating it as pathogenic would cause unnecessary anxiety and testing. It is an inversion within one chromosome and does not involve an exchange with another chromosome. It involves no loss of material, so it cannot be a deletion, and bone marrow testing would add nothing.",
    "id": 272
  },
  {
    "domain": "cytogenetics",
    "chapter": 29,
    "question": "A laboratory obtains 24 metaphases from a blood culture of a newborn with ambiguous genitalia. Twenty-one cells are 46,XY and three cells are 45,X. Following ISCN conventions for listing cell lines, how should the result be written?",
    "options": {
      "A": "46,XY[21]/45,X[3], listing the cell line with the most cells first",
      "B": "46,XY/45,XO, using a letter O to mark the missing sex chromosome",
      "C": "46,XY,-Y[3], recording the loss as a change within one cell line",
      "D": "45,X[3]/46,XY[21], listing the abnormal line first and the normal line last"
    },
    "answer": "D",
    "explanation": "ISCN lists abnormal clones first, in order of size, and always places the normal cell line last, so the 45,X line comes before the 46,XY line even though it has fewer cells. Listing the most numerous line first is the pattern the convention does not follow when a normal line is present. The letter O is not used, and monosomy of the X is written 45,X. The notation 46,XY,-Y[3] contradicts itself, since losing the Y would give 45 chromosomes and not 46, and it does not describe two cell lines.",
    "id": 273
  },
  {
    "domain": "cytogenetics",
    "chapter": 30,
    "question": "A laboratory uses a dual-colour dual-fusion probe set for BCR (green) and ABL1 (red) on a bone marrow sample. In 190 of 200 interphase nuclei, the pattern is one green, one red and two fusion signals. What is the correct interpretation?",
    "options": {
      "A": "A normal result, since each nucleus has the expected number of signals",
      "B": "Amplification of the BCR gene in most of the nuclei counted",
      "C": "A deletion of the ABL1 gene from one copy of chromosome 9",
      "D": "A positive result consistent with a reciprocal BCR::ABL1 rearrangement in most nuclei"
    },
    "answer": "D",
    "explanation": "A normal nucleus with this probe shows two green and two red signals and no fusion, so the finding of two fusions with one separate red and one green signal is the classic pattern of a reciprocal translocation. Amplification would give clusters of several signals of the same colour and not two fusions. Loss of one copy would give a single red signal and no fusion. A normal interpretation ignores the fusion signals, which are the essential feature of the pattern.",
    "id": 274
  },
  {
    "domain": "cytogenetics",
    "chapter": 30,
    "question": "In validating a new locus-specific deletion probe on tissue sections, a laboratory scores 40 normal specimens and finds a mean of 2.0 percent of nuclei with a single signal and a standard deviation of 0.8 percent. Using the mean plus 3 standard deviations, what is the cutoff?",
    "options": {
      "A": "Add one standard deviation to the mean, giving a cutoff of 2.8 percent",
      "B": "Add three standard deviations to the mean, giving a cutoff of 4.4 percent",
      "C": "Add three times the mean to the mean, giving a cutoff of 8.0 percent",
      "D": "Use the mean of the normal group alone as the cutoff, giving 2.0 percent"
    },
    "answer": "B",
    "explanation": "The cutoff equals the mean plus three times the standard deviation, which is 2.0 plus 2.4, giving 4.4 percent. Adding only one standard deviation gives 2.8 percent, which is too low and would produce many false positives. Adding three times the mean instead of the standard deviation gives 8.0 percent, which confuses the two statistics. Using the mean alone would call about half of normal specimens abnormal, so a single upper limit set well above the mean is needed.",
    "id": 275
  },
  {
    "domain": "cytogenetics",
    "chapter": 30,
    "question": "An analyst reviewing a FISH slide from an FFPE breast tumour section sees many nuclei with only one signal of a deletion probe and weak DAPI staining, and the nuclei look small and fragmented. What is the most likely explanation?",
    "options": {
      "A": "A true heterozygous deletion present in all tumour cells",
      "B": "Trisomy of the chromosome carrying the probe in the normal stroma",
      "C": "Nuclear truncation from sectioning or over-digestion, causing false loss of signals",
      "D": "Contamination of the probe with a second fluorophore from a prior run"
    },
    "answer": "C",
    "explanation": "Cutting through nuclei and heavy enzyme digestion remove part of the nucleus, so signals are lost and the nuclei look fragmented with weak counterstain, and this is the common cause of apparent monosomy in tissue. A true deletion would occur in nuclei with intact morphology and a normal control signal. Trisomy would increase signals and not reduce them. Probe contamination with a different fluorophore would change colours rather than remove signals.",
    "id": 276
  },
  {
    "domain": "cytogenetics",
    "chapter": 30,
    "question": "A rapid prenatal FISH on uncultured amniotic fluid cells shows three signals for the chromosome 21 probe in 48 of 50 scored nuclei. What is the best next step in the laboratory's reporting?",
    "options": {
      "A": "Report the rapid result as preliminary, and confirm with a full karyotype",
      "B": "Report the result as final and cancel the cultures to save resources",
      "C": "Repeat the FISH with a probe for chromosome 18 to confirm the result",
      "D": "Wait for the karyotype and withhold any communication until the culture is complete"
    },
    "answer": "A",
    "explanation": "Rapid FISH is a screening assay for a limited set of chromosomes, so an abnormal result is reported as preliminary and followed by a full karyotype, which can show whether the extra material is a free trisomy or a translocation. Cancelling the cultures would remove the check that distinguishes the form of trisomy and misses other abnormalities. A chromosome 18 probe does not confirm the 21 finding. Holding the result delays information that the clinician needs for decision making.",
    "id": 277
  },
  {
    "domain": "cytogenetics",
    "chapter": 30,
    "question": "A technologist notes that all nuclei on a FISH slide show a diffuse, bright green haze that obscures the signals, and the wash bath temperature was recorded at 62 degrees Celsius, whereas the protocol specifies 72 degrees. What is the best explanation and action?",
    "options": {
      "A": "The wash was too cool, so repeat it at the specified temperature",
      "B": "The probe concentration was too low, so more probe should be added",
      "C": "The slide was over-denatured, so the run is lost and the specimen must be recollected",
      "D": "The filter set is wrong, and the microscope should be realigned"
    },
    "answer": "A",
    "explanation": "A wash at a temperature below the specified stringency leaves weakly bound and unbound probe, which creates the haze, and a repeat wash with a verified bath temperature can often rescue the slide. Too little probe would give weak signals, not a bright haze. Over-denaturation tends to destroy nuclear morphology and weaken signals rather than cause background. A wrong filter set would change the colour or the brightness of the image but not produce a haze in a correctly washed slide.",
    "id": 278
  },
  {
    "domain": "cytogenetics",
    "chapter": 30,
    "question": "A child with developmental delay has a chromosomal microarray that shows a loss of about 2.5 megabases at 22q11.21 with a log2 ratio near minus 1.0 for the region. What is the most accurate interpretation of the log2 value?",
    "options": {
      "A": "A homozygous deletion with loss of both copies in all of the cells tested",
      "B": "A heterozygous deletion with one of two copies lost, matching the expected value",
      "C": "A duplication with three copies, giving a ratio of 3 to 2",
      "D": "A normal result with random noise between adjacent probes across the region"
    },
    "answer": "B",
    "explanation": "One copy against two gives a ratio of 0.5, and the log2 of 0.5 is minus 1, so this result matches a single-copy loss, the usual finding in 22q11.2 deletion syndrome. A homozygous deletion would approach a very negative value. A duplication would give a positive value near plus 0.58. A normal result would sit near zero, and a consistent shift of minus 1 across a block of adjacent probes is not noise.",
    "id": 279
  },
  {
    "domain": "cytogenetics",
    "chapter": 30,
    "question": "A SNP microarray on a child with growth restriction shows normal copy number everywhere but a long run of homozygous genotypes across most of chromosome 15. What does this finding most likely indicate?",
    "options": {
      "A": "A deletion of one copy of chromosome 15 in a mosaic form",
      "B": "A balanced translocation involving chromosome 15, which the array detects as homozygosity",
      "C": "Uniparental disomy or identity by descent, requiring further study of the parents",
      "D": "An artefact due to degraded DNA, requiring a repeat of the extraction only"
    },
    "answer": "C",
    "explanation": "Absence of heterozygosity without a copy number change suggests that both copies of the chromosome came from one parent, or that parents are related, and parental genotypes and methylation studies are needed to clarify, particularly for chromosome 15 where imprinting disorders occur. A deletion would reduce signal intensity. A balanced translocation is invisible to arrays and does not generate long homozygous runs. Poor DNA quality causes noise, not a long contiguous stretch of homozygosity.",
    "id": 280
  },
  {
    "domain": "cytogenetics",
    "chapter": 30,
    "question": "A laboratory director asks why a normal microarray does not exclude a reciprocal translocation in a patient with recurrent miscarriage. Which response is correct?",
    "options": {
      "A": "Microarrays cannot detect any structural change, including deletions and duplications in the genome",
      "B": "Balanced rearrangements cause no net copy number change, so an array cannot see them",
      "C": "Microarrays detect only whole chromosome gains and not segmental changes in dosage",
      "D": "A normal array excludes the translocation, and the question has no valid basis"
    },
    "answer": "B",
    "explanation": "An array measures dosage along the genome, and a balanced translocation moves segments without gain or loss, so the dosage appears normal, and a karyotype or FISH is needed to find it. Arrays do detect deletions and duplications down to a few tens of kilobases. They also detect segmental changes as well as whole-chromosome ones. A normal array therefore cannot exclude a balanced rearrangement, which is the point of the question.",
    "id": 281
  },
  {
    "domain": "cytogenetics",
    "chapter": 30,
    "question": "After a sex-mismatched bone marrow transplant from a female donor into a male recipient, FISH with X and Y centromere probes on 200 nuclei shows 188 XX nuclei and 12 XY nuclei. What is the percentage of recipient cells?",
    "options": {
      "A": "Six percent, from twelve XY nuclei divided by 200 scored",
      "B": "Ninety-four percent, from the proportion of the nuclei that are XX",
      "C": "Twelve percent, taking the raw XY nuclear count as the percentage",
      "D": "Zero percent, because female donor cells carry no Y centromere signal"
    },
    "answer": "A",
    "explanation": "XY nuclei are recipient cells and XX nuclei are donor cells, so the recipient fraction is 12 divided by 200, times 100, which is 6 percent. The figure of 94 percent is the donor fraction, which is the reverse of what was asked. Twelve percent treats the raw count as if it were a percentage of 100 nuclei. Zero percent misreads the design, since the XY nuclei present in a male recipient are exactly the cells that identify residual recipient hematopoiesis.",
    "id": 282
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 31,
    "question": "A technologist measures a DNA extract by spectrophotometry and obtains an A260 to A280 ratio of 1.82 and an A260 to A230 ratio of 0.9. What is the most reasonable conclusion?",
    "options": {
      "A": "The DNA is free of protein and salts, and it is ready for PCR without further steps",
      "B": "The DNA is contaminated with protein, so extraction must be repeated with proteinase K",
      "C": "The DNA is probably contaminated with a salt or organic carry-over, and cleanup is advisable",
      "D": "The ratios cannot be interpreted until RNA contamination is excluded by a gel"
    },
    "answer": "C",
    "explanation": "An A260 to A280 ratio near 1.8 suggests little protein, but a low A260 to A230 ratio signals contamination with substances such as guanidine, ethanol, phenol or carbohydrate that absorb near 230 nanometres and can inhibit PCR. Declaring the sample ready would ignore this. The 280 ratio does not suggest a protein problem, so a repeat with proteinase K is not directed at the issue. A gel is not needed to interpret these ratios, since the finding already points to the carry-over of the extraction reagents.",
    "id": 283
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 31,
    "question": "A real-time PCR standard curve is built from five tenfold dilutions, and the slope of Ct against log10 of the starting quantity is minus 3.32. What is the amplification efficiency?",
    "options": {
      "A": "About 100 percent, which means the product doubles with each cycle",
      "B": "About 50 percent, which means the product increases by half with each cycle",
      "C": "About 200 percent, which means the product triples with each cycle",
      "D": "About 33 percent, which means the product increases by a third with each cycle"
    },
    "answer": "A",
    "explanation": "Efficiency equals 10 to the power of minus 1 over the slope, minus 1, and with a slope of minus 3.32 this gives 10 to the power of 0.301, which is 2, minus 1, or 1.0, so 100 percent, meaning a doubling each cycle. An efficiency of 50 percent would give a much steeper slope near minus 5.7. A value above 100 percent is not physically meaningful for a clean reaction and usually reflects inhibition or pipetting error. The figure of 33 percent comes from misreading the slope as the efficiency.",
    "id": 284
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 31,
    "question": "In a duplex real-time assay for a pathogen, the no-template control is negative, the positive control amplifies at Ct 28, and a patient sample shows no amplification of the target and no amplification of the internal control. What is the correct interpretation?",
    "options": {
      "A": "Negative for the target, and the result can be reported as such",
      "B": "Positive for the target at a low level, since the curve is flat",
      "C": "Contamination of the reagents, since a control did not amplify",
      "D": "Invalid result, probably inhibition or extraction failure, needing a dilution or repeat"
    },
    "answer": "D",
    "explanation": "When the internal control fails in a sample, the reaction cannot be assumed to have worked, so a negative result is not valid and could be a false negative. Reporting as negative would ignore this. A flat curve is not a low positive. Contamination would produce signal in the no-template control, not loss of signal in a patient well. The next step is to dilute the extract or repeat the extraction to reduce the inhibitor and retest.",
    "id": 285
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 31,
    "question": "A laboratory sets up a delta delta Ct calculation. The patient's target Ct is 25 and reference gene Ct is 20, and the calibrator's target Ct is 28 and reference Ct is 20. Assuming 100 percent efficiency, what is the fold change in the patient relative to the calibrator?",
    "options": {
      "A": "A threefold lower level in the patient, from using the raw Ct difference alone",
      "B": "An eightfold higher level in the patient, from two to the power of three",
      "C": "A threefold higher level in the patient, from using the raw Ct difference alone",
      "D": "An eightfold lower level in the patient, from reversing the direction of subtraction"
    },
    "answer": "B",
    "explanation": "The patient's delta Ct is 25 minus 20, which is 5, and the calibrator's is 28 minus 20, which is 8, so the delta delta Ct is 5 minus 8, or minus 3, and the fold change is 2 to the power of 3, equal to 8, a higher level in the patient. A change of 3-fold would result from using the difference in Ct without the exponent. Reversing the subtraction would give a lower value and the opposite direction. An eightfold decrease comes from the same arithmetic with the sign inverted.",
    "id": 286
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 31,
    "question": "A molecular laboratory finds the same amplicon in several no-template controls over a week. The laboratory begins to include dUTP in master mixes along with uracil-N-glycosylase. How does this control contamination?",
    "options": {
      "A": "The enzyme digests RNA templates so they cannot be amplified",
      "B": "The enzyme increases the specificity of primer binding in the first cycle",
      "C": "The enzyme destroys uracil-containing products from earlier runs before amplification begins",
      "D": "The dUTP prevents polymerase from extending primers on the patient DNA template"
    },
    "answer": "C",
    "explanation": "Amplicons made with dUTP contain uracil, and the glycosylase removes uracil bases and breaks the strand at the first heating step, so carried-over product cannot be amplified, while native DNA with thymine is untouched. The enzyme does not act on RNA. It does not improve primer specificity. The dUTP does not block extension on patient template, since polymerase can use it normally, and it only marks the products as targets for destruction.",
    "id": 287
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 31,
    "question": "A technologist observes a bright band of low molecular weight, below the expected product, in every lane of a PCR gel including the no-template control, with no band at the expected size in the control. What is the most likely identity of the low-weight band?",
    "options": {
      "A": "Primer dimers formed when the two primers bind to each other",
      "B": "Genomic DNA carried over from the extraction step into the reaction",
      "C": "A deletion product present in every patient tested and in the control",
      "D": "Degraded RNA from the specimens, amplified directly by the standard polymerase"
    },
    "answer": "A",
    "explanation": "Primer dimers form when primers anneal to each other, appear in all lanes including the no-template control because they need no template, and run at a low molecular weight. Genomic DNA would run high and would be absent from the no-template control. A deletion product present in every lane, including the control without template, cannot be explained biologically. RNA is not amplified by standard PCR and would not appear as a discrete band.",
    "id": 288
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 31,
    "question": "A lab director asks how many copies would result from a single starting template after 30 cycles with perfect efficiency. Which is the best estimate?",
    "options": {
      "A": "About 30 copies, since each cycle adds only one new copy to the total",
      "B": "About 1 billion copies, since each cycle doubles the amount of product",
      "C": "About 900 copies, from squaring the number of cycles completed",
      "D": "About 1 million copies, equal to the product after twenty doublings"
    },
    "answer": "B",
    "explanation": "Each cycle doubles the number of copies, so 30 cycles gives 2 to the power of 30, about 1.07 billion. A count of 30 would reflect adding one copy per cycle, which is linear. A count of 900 would reflect squaring the cycle number. A count of 1 million corresponds to about 20 cycles, and thirty cycles gives about a thousand times more. Actual yield is lower because efficiency falls in late cycles.",
    "id": 289
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 31,
    "question": "A real-time RT-PCR for BCR::ABL1 on a patient with chronic myeloid leukemia shows a rise in the transcript level on the International Scale from 0.05 percent to 0.5 percent over three months. What is the best laboratory action?",
    "options": {
      "A": "Report the result as stable, since both values are below 1 percent",
      "B": "Treat the change as an artefact and not communicate it to the clinician",
      "C": "Repeat the extraction using a different method and report only the lower value",
      "D": "Report the tenfold rise and recommend confirmation and clinical review"
    },
    "answer": "D",
    "explanation": "A tenfold rise in transcript level on the same standardized scale is clinically meaningful, and the clinician needs to know so that adherence, resistance and a repeat test can be considered. Calling it stable ignores the trend. Treating it as an artefact without evidence withholds information. Selecting the lower value without a reason compromises the integrity of reporting. Repeating the test is reasonable, but both values would then be reported.",
    "id": 290
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 31,
    "question": "A technologist prepares a PCR master mix at the bench where patient DNA was extracted earlier the same morning. Which is the most important concern with this practice?",
    "options": {
      "A": "The master mix will be degraded by the heat from the biological cabinet",
      "B": "Template DNA may contaminate the reagents, causing false-positive results",
      "C": "The pipettes will lose calibration after exposure to extraction reagents",
      "D": "The thermal cycler will not accept tubes prepared in the extraction area"
    },
    "answer": "B",
    "explanation": "Preparing the master mix in an area where template and amplified product are handled breaks the unidirectional workflow, and traces of DNA can enter the reagents and give false positives. A biological cabinet does not heat reagents enough to degrade them. Calibration is not lost by contact with extraction reagents. The thermal cycler accepts any compatible tubes, whichever room they were prepared in, and has no way of knowing.",
    "id": 291
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 32,
    "question": "A Sanger chromatogram of a PCR product shows a clean sequence up to position 150, and after that point every position has two overlapping peaks. The forward and reverse reads are consistent. What is the most likely explanation?",
    "options": {
      "A": "A heterozygous insertion or deletion, putting the two alleles out of register afterward",
      "B": "A heterozygous single-base substitution at position 150, affecting only that single peak",
      "C": "Contamination of the reaction by unincorporated dye blobs from poor cleanup",
      "D": "A homozygous deletion, producing a single clean trace in the downstream sequence"
    },
    "answer": "A",
    "explanation": "A heterozygous indel shifts one allele relative to the other, so everything after the change is read as a superimposed double sequence that is consistent on both strands. A single-base substitution gives two peaks at one position only, with a clean trace afterwards. Dye blobs are broad peaks that affect the early part of the read and do not cause a clean double sequence. A homozygous deletion would give a single clean trace shifted from the reference, not two overlapping peaks.",
    "id": 292
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 32,
    "question": "A laboratory reviews NGS data for a somatic panel. At one position, 600 reads are present, and 90 contain a variant base. What is the variant allele fraction?",
    "options": {
      "A": "Fifteen percent, from ninety variant reads divided by six hundred total reads",
      "B": "Six and seven tenths percent, from inverting the fraction of the two read counts",
      "C": "Eighty-five percent, which is the proportion of reads matching the reference",
      "D": "Ninety percent, which is the raw count of variant reads taken as a percentage"
    },
    "answer": "A",
    "explanation": "The VAF is the number of variant reads divided by the total depth, 90 divided by 600, which equals 0.15, or 15 percent. A value of 6.7 percent comes from inverting the fraction, 600 divided by 90, as a mistaken ratio. A value of 85 percent is the proportion of reads that match the reference. The value of 90 is the raw count of variant reads and not a fraction of the depth.",
    "id": 293
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 32,
    "question": "A tumour sample has an estimated purity of 40 percent. A heterozygous truncal mutation in a diploid region is expected at what variant allele fraction?",
    "options": {
      "A": "Forty percent, which would apply only if every allele in a tumour cell were mutant",
      "B": "Eighty percent, which is double the tumour purity and is not biologically possible",
      "C": "Twenty percent, which is half the purity because one of two alleles is mutant",
      "D": "Ten percent, which would fit a subclonal mutation in half of the tumour cells"
    },
    "answer": "C",
    "explanation": "Heterozygous means one of two alleles carries the mutation in each tumour cell, so the expected VAF is half of the tumour fraction, or 20 percent here. Using the full purity of 40 percent would apply only if every allele in a tumour cell were mutant. A value of 80 percent would be double the purity, which is not possible. A value of 10 percent would be a subclonal mutation present in half of the tumour cells.",
    "id": 294
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 32,
    "question": "A somatic panel report lists NM_004333.6:c.1799T>A, p.(Val600Glu) in a melanoma. Which statement describes this notation correctly?",
    "options": {
      "A": "A change at position 1799 of the genomic reference converting valine to glutamate",
      "B": "A deletion of the thymine at position 1799 of the transcript, causing a frameshift",
      "C": "A change at position 600 of the DNA, with a single amino acid at position 1799",
      "D": "A T to A change at coding position 1799, replacing valine by glutamic acid"
    },
    "answer": "D",
    "explanation": "The prefix c. refers to the coding sequence of the named transcript, the arrow indicates a substitution of T by A, and p. gives the effect, valine at residue 600 replaced by glutamic acid, which is the BRAF V600E change. The genomic notation would use g. with a different coordinate system. A deletion would use del and not an arrow, and does not describe a single-base substitution. The numbering reverses the roles of the DNA and protein positions in the statement of position 600 for DNA.",
    "id": 295
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 32,
    "question": "A laboratory finds a rare missense variant in a gene associated with a dominant cardiac condition in a patient with no family history. The variant has not been reported before, is predicted damaging by software, and there are no functional or segregation data. What classification best fits?",
    "options": {
      "A": "Pathogenic, since software predicts a damaging effect on the protein function",
      "B": "Variant of uncertain significance, since the evidence is limited and meets no other tier",
      "C": "Benign, since no earlier reports of the variant exist in the literature",
      "D": "Likely benign, since the patient has no family history of the disease"
    },
    "answer": "B",
    "explanation": "Computational prediction alone is weak evidence, and with no functional, segregation or case data, the criteria for pathogenic or likely pathogenic are not met, so VUS is correct, with a plan for follow-up and periodic reanalysis. Absence from the literature does not support a benign classification. A negative family history is weak and can reflect reduced penetrance or a de novo event, so it is not enough to call the variant likely benign.",
    "id": 296
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 32,
    "question": "A technologist is reviewing an amplicon-based NGS run and sees that one sample has a mean depth of 40 reads while others have a mean of 800. Which is the most likely cause?",
    "options": {
      "A": "Poor quantification or unequal pooling of that library, leading to under-representation",
      "B": "A high Q30 score for the run, which always lowers the depth of one sample",
      "C": "The reference genome build was changed after the alignment of that sample",
      "D": "Excess tumour content in the sample, which reduces coverage"
    },
    "answer": "A",
    "explanation": "If a library is over-diluted or inaccurately measured, it contributes fewer molecules to the pool and so receives fewer reads, and this is one of the main reasons for low coverage in a single sample. A high Q30 reflects good base accuracy and does not lower depth. Changing the reference build would change coordinates and not the depth for one sample. Tumour content affects the VAF, not the number of reads at a position.",
    "id": 297
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 32,
    "question": "An FFPE-derived DNA sample shows many low-level C to T changes across the panel at VAFs of 1 to 3 percent that are absent in a matched fresh sample. What is the most likely cause?",
    "options": {
      "A": "Cytosine deamination during formalin fixation and long storage of the block",
      "B": "A true polyclonal tumour with many different subclones at low frequency",
      "C": "A contamination event affecting the sequencing flow cell during the run",
      "D": "A mistaken reference genome, which produces consistent base changes in samples"
    },
    "answer": "A",
    "explanation": "Formalin fixation and long storage cause deamination of cytosine to uracil, read as thymine, leading to a spray of low-VAF C to T changes that are not present in a fresh sample from the same tumour. A subclonal tumour would not produce the same chemical signature across unrelated sites. Flow cell contamination would give variants from another sample, not a pattern of one substitution type. A reference error would affect all samples in the same way, not only the FFPE one.",
    "id": 298
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 32,
    "question": "A hereditary cancer panel shows no pathogenic variants, but the laboratory's coverage report shows that exon 11 of the gene of interest had a depth below the minimum of 100 reads. What should the report state?",
    "options": {
      "A": "The patient is negative for pathogenic variants in all regions of the gene",
      "B": "The gene cannot be interpreted, and the test should be cancelled without a report",
      "C": "The result is negative, and the exon 11 region is not required to be mentioned",
      "D": "No variants were found in covered regions, and exon 11 was not adequately assessed"
    },
    "answer": "D",
    "explanation": "A negative result applies only to regions that were covered at or above the minimum depth, and an exon that was not adequately covered is unassessed, so the limitation is stated and a follow-up method, such as Sanger sequencing of the exon, is suggested. Declaring all regions negative would overstate the test. Cancelling the report removes useful information about the covered regions. Not mentioning the region hides a limitation that the clinician must know.",
    "id": 299
  },
  {
    "domain": "molecular_diagnostics",
    "chapter": 32,
    "question": "A laboratory introduces a new lot of library preparation reagents for its NGS assay. What is the most appropriate step before using the lot for patient samples?",
    "options": {
      "A": "Use it immediately, since the manufacturer states that all lots are identical",
      "B": "Verify the new lot using reference material of known variants against the old lot",
      "C": "Validate the entire assay again, including all specimen types and every variant class",
      "D": "Run only a no-template control and accept the lot if the control is negative"
    },
    "answer": "B",
    "explanation": "A lot change calls for verification that the assay still performs as validated, using known material to check detection, depth and quality metrics against acceptance criteria. Relying on the manufacturer's statement alone skips the laboratory's own responsibility. A complete revalidation is for a major change, such as a new chemistry, and is excessive for a lot change. A no-template control only checks for contamination and gives no information about sensitivity.",
    "id": 300
  }
];
