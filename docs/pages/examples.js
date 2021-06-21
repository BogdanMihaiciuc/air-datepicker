import React from 'react';
import Container from 'components/layout/container';
import ContentGrid from 'components/layout/contentGrid';
import NavBar from 'components/navBar';
import PageTitle from 'components/pageTitle';
import Section from 'components/section';
import Example from 'components/example';
import AirDatepicker from 'components/airDatepicker';
import Code from 'components/code';
import * as code from 'examples/commonExamples';
import {FormattedMessage, injectIntl} from 'react-intl';
import {timeFormatOption, timeRangeExample} from 'examples/commonExamples';

class Examples extends React.Component {
    constructor() {
        super();
    }

    componentDidMount(){

    }

    render(){
        let today = new Date();
        let {intl} = this.props;

        return (
            <div className='examples'>
                <Container>
                    <ContentGrid>
                        <NavBar />
                        <main role='main'>
                            <PageTitle titleId={'navExamples'} />
                            <Section title='exampleBasicTitle'>
                                <Example>
                                   <AirDatepicker placeholder={intl.messages.chooseDate} />
                                   <Code>{code.basicInit}</Code>
                                </Example>

                                <Section.SubTitle titleId='exampleBasicInlineTitle' />
                                <FormattedMessage
                                    tagName={'p'}
                                    id={'exampleBasicInlineNote'}
                                    values={{param: <Code inline>{`{inline: true}`}</Code>   }}
                                />
                                <Example>
                                    <AirDatepicker inline/>
                                    <Code>{code.basicInitInline}</Code>
                                </Example>
                            </Section>
                            <Section title='exampleRangeTitle'>
                                <FormattedMessage
                                    tagName={'p'}
                                    id={'exampleRangeNote'}
                                    values={{param: <Code inline>{`{range: true}`}</Code>}}
                                />
                                <Example>
                                   <AirDatepicker range={true} multipleDatesSeparator={' - '} />
                                   <Code>{code.rangeOption}</Code>
                                </Example>
                            </Section>
                            <Section title='exampleTimeTitle'>
                                <FormattedMessage
                                    tagName={'p'}
                                    id={'exampleTimeNote'}
                                    values={{
                                        param: <Code inline>{`{timepicker: true}`}</Code>,
                                        startDate: <Code inline>{`startDate`}</Code>
                                    }}
                                />
                                <Example>
                                   <AirDatepicker timepicker={true}/>
                                   <Code>{code.timeOption}</Code>
                                </Example>

                                <Section.SubTitle titleId={'exampleTimeTitleFormat'} />
                                <FormattedMessage
                                    tagName={'p'}
                                    id={'exampleTimeFormatNote'}
                                    values={{
                                        paramName: <Code inline>{`{timeFormat: '...'}`}</Code>,
                                        dateFormataa: <Code inline>{`aa`}</Code>,
                                        dateFormatAA: <Code inline>{`AA`}</Code>
                                    }}
                                />
                                <Example>
                                    <AirDatepicker
                                        timepicker
                                        selectedDates={new Date()}
                                        timeFormat={'hh:mm AA'}
                                    />
                                    <Code>{code.timeFormatOption}</Code>
                                </Example>

                                <Section.SubTitle titleId={'exampleTimeRangeTitle'} />
                                <FormattedMessage
                                    id={'exampleTimeRangeNote'}
                                    tagName={'p'}
                                    values={{
                                        commonOptions: <Code inline>{`minHours, maxHours, minMinutes, maxMinutes`}</Code>,
                                        stepOptions: <Code inline>{`hoursStep, minutesStep`}</Code>
                                    }}
                                />
                                <FormattedMessage
                                    id={'exampleTimeRangeNote2'}
                                    tagName={'p'}
                                />
                                <Example>
                                    <AirDatepicker inline timepicker minHours={9} maxHours={18} minutesStep={5}/>
                                    <Example>
                                        <Code>{code.timeRangeExample}</Code>
                                    </Example>
                                </Example>
                            </Section>
                            <Section title='exampleCellContentTitle'>
                                <FormattedMessage
                                    tagName={'p'}
                                    id={'exampleCellContentNote'}
                                    values={{
                                        param: <Code inline>{`{onRenderCell: ({date, cellType}) => {})}`}</Code>,
                                    }}
                                />
                                <FormattedMessage
                                    tagName={'p'}
                                    id={'exampleCellContentNote_2'}
                                />
                                <Example>
                                    <AirDatepicker
                                        inline
                                        selectedDates={new Date(today.getFullYear(), today.getMonth(), 10)}
                                        onRenderCell={({date, type}) => {
                                        let dates = [1, 5, 7, 10, 15, 20, 25],
                                            emoji = ['💕', '😃', '🍙', '🍣', '🍻', '🎉', '🥁'],
                                            isDay = type === 'day',
                                            _date = date.getDate(),
                                            shouldChangeContent = isDay && dates.includes(_date),
                                            randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];

                                        return {
                                            html: shouldChangeContent ? randomEmoji : false,
                                            classes: shouldChangeContent ? '-emoji-cell-' : false
                                        }
                                    }}/>
                                    <Code>{code.customCellExample}</Code>
                                    <Code language='css'>{code.customCellExampleCss}</Code>
                                </Example>
                            </Section>
                        </main>
                    </ContentGrid>
                </Container>
            </div>
        );
    }
}

export default injectIntl(Examples)
