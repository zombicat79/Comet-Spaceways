import React from 'react';
import { Document, Page, View, Font, Text, Image, ImageBackground, TextInput, StyleSheet } from '@react-pdf/renderer';

Font.register({ family: 'Roboto', src: '/assets/fonts/roboto/Roboto_Condensed-Regular.ttf'});
Font.register({ family: 'Roboto-Bold', src: '/assets/fonts/roboto/Roboto_Condensed-Bold.ttf'});
Font.register({ family: 'Roboto-Italic', src: '/assets/fonts/roboto/Roboto_Condensed-Italic.ttf'});

const styles = StyleSheet.create({
    document: {
        fontFamily: "Roboto",
        fontSize: 14
    },
    page: {
        padding: "50px",
        wordWrap: "wrap",
        position: "relative"
    },
    title: {
        textTransform: "uppercase",
        textDecoration: "underline",
        textAlign: "center",
        marginBottom: "40px",
        fontFamily: "Roboto-Bold",
        fontSize: "16px"
    },
    csBadge: {
      width: "100px",
      height: "auto",
      margin: "0 auto 20px"  
    },
    background: {
        position: "absolute",
        left: "10px",
        top: "120px",
        width: "580px",
        height: "580px",
        opacity: "0.1"
    },
    clause: {
        fontFamily: "Roboto-Italic",
        fontSize: 12,
        padding: "0 30px"
    },
    textInput: {
        height: "20px"
    },
    bold: {
        fontFamily: "Roboto-Bold"
    },
    italic: {
        fontFamily: "Roboto-Italic"
    },
    separation10: {
        marginBottom: "10px"
    },
    separation20: {
        marginBottom: "20px"
    }
})

export function GoodwillDoc() {
    return (
        <Document style={styles.document} >
            <Page style={styles.page} >
                <ImageBackground src="/logos/sfederation-logo_dark.png" style={styles.background} fixed />
                <View style={styles.separation20} >
                    <Image src="/logos/ctsw-logo_dark_badge.png" style={styles.csBadge} />
                    <Text style={styles.title}>
                        DECLARATION OF GODWILL
                    </Text>
                    <Text>
                        As a condition of passage within the jurisdiction of the Solar Federation, all non-human passengers on commercial spaceflights (NHEs) 
                        are required to observe the following mandates:
                    </Text>
                </View>
                <View>
                    <Text style={{...styles.clause, ...styles.separation10}} >
                        <Text style={styles.bold}>1. Non-Interference with Planetary Governance:</Text> I commit to refraining from any attempt to influence, subvert or de-stabilize the 
                        political, social or administrative structures of the Solar Federation or any of its subsidiary planetary governments, moons, colonies and outposts.
                    </Text>
                    <Text style={{...styles.clause, ...styles.separation10}} >
                        <Text style={styles.bold}>2. Abstention from Biological Contamination:</Text> I pledge to maintain strict xenobiological quarantine 
                        protocols, ensuring no invasive spores, pathogens or organic matter are introduced to human biospheres. 
                    </Text>
                    <Text style={{...styles.clause, ...styles.separation10}} >
                        <Text style={styles.bold}>3. Prohibition of Economic Sabotage:</Text> I will not engage in activities designed to manipulate human 
                        markets, destabilize the Solar Federation's Astronomical Unit ($AU currency) or devalue human or artificially-generated resources and labor.
                    </Text>
                    <Text style={{...styles.clause, ...styles.separation10}} >
                        <Text style={styles.bold}>4. Preservation of Technological Parity:</Text> I commit to withholding advanced technology or forbidden 
                        knowledge that could lead to "premature evolution" or the development of weapons beyond the current human safety classification.
                    </Text>
                    <Text style={{...styles.clause, ...styles.separation10}} >
                        <Text style={styles.bold}>5. Refusal of Covert Intelligence Gathering:</Text> I will not deploy surveillance tech, psychic probes or 
                        data-mining subroutines intended to harvest sensitive human military or cultural metadata.
                    </Text>
                    <Text style={{...styles.clause, ...styles.separation10}} >
                        <Text style={styles.bold}>6. Protection of Cultural Integrity:</Text> I pledge to avoid the systematic erosion of human traditions, 
                        languages and religions through the forced imposition of extraterrestrial ideologies or "intergalactic standard" norms.
                    </Text>
                    <Text style={{...styles.clause, ...styles.separation10}} >
                        <Text style={styles.bold}>7. Resource Non-Encroachment:</Text> I recognize the exclusive rights of the Solar Federation and its citizens to 
                        the minerals, volatiles and energy output of the Solar System's mother star, and I will not partake in unauthorized extraction.
                    </Text>
                    <Text style={{...styles.clause, ...styles.separation10}} >
                        <Text style={styles.bold}>8. Avoidance of Strategic Territorial Occupation:</Text> I will not establish permanent outposts, relays or 
                        "strategic anchor points" within human-controlled space without explicit Federation diplomatic clearance.
                    </Text>
                    <Text style={{...styles.clause, ...styles.separation10}} >
                        <Text style={styles.bold}>9. Prohibition of Cognitive Manipulation:</Text> I commit to refraining from the use of neurolinguistic hacking, 
                        pheromonal influence or hypnotic suggestion on human subjects for personal or political gain.
                    </Text>
                    <Text style={{...styles.clause, ...styles.separation20}} >
                        <Text style={styles.bold}>10. Absolute Non-Aggression:</Text> I solemnly swear that my presence, my equipment and my retinue shall not be used 
                        to inflict physical harm, psychological trauma or structural damage upon human civilization or any of its collective interests..
                    </Text>
                </View>
                <View style={styles.separation20} >
                    <Text>
                        By entering, I acknowledge that any violation of these commitments may result in immediate or terminal revocation of my 
                        Solar Federation's spacepass.
                    </Text>
                </View>
                <View>
                    <Text>
                        Spacepass No.
                    </Text>
                    <TextInput style={styles.textInput} />
                    <Text>
                        Date
                    </Text>
                    <TextInput style={styles.textInput} />
                </View>
            </Page>
        </Document>
    )
}
