import { Onboarding } from '@macos/appviews';
import StepSwitcher, {
  OnboardingPage,
} from '@macos/appviews/src/Onboarding/StepSwitcher';
import * as Step from '@macos/appviews/src/Onboarding/Steps';
import { OnboardingStep } from '@macos/appviews/src/Onboarding/onboarding-store';
import React from 'react';

const OnboardingStatefulSwitcher: React.FC = () => {
  const [step, setStep] = React.useState<OnboardingStep>('welcome');

  return (
    <div
      onClick={() => {
        switch (step) {
          case 'welcome':
            setTimeout(() => setStep('confirmGertrudeAccount'), 1000); // this is handled in the component, but need to simulate it here
            break;
          case 'confirmGertrudeAccount':
            setStep('noGertrudeAccount');
            break;
          case 'noGertrudeAccount':
            setStep('macosUserAccountType');
            break;
          case 'macosUserAccountType':
            setStep('getChildConnectionCode');
            break;
          case 'getChildConnectionCode':
            setStep('connectChild');
            break;
          case 'connectChild':
            setStep('allowNotifications_start');
            break;
          case 'allowNotifications_start':
            setStep('allowNotifications_grant');
            break;
          case 'allowNotifications_grant':
            setStep('allowScreenshots_required');
            break;
          case 'allowScreenshots_required':
            setStep('allowScreenshots_openSysSettings');
            break;
          case 'allowScreenshots_openSysSettings':
            setStep('allowScreenshots_grantAndRestart');
            break;
          case 'allowScreenshots_grantAndRestart':
            setStep('allowScreenshots_success');
            break;
          case 'allowScreenshots_success':
            setStep('allowKeylogging_required');
            break;
          case 'allowKeylogging_required':
            setStep('allowKeylogging_openSysSettings');
            break;
          case 'allowKeylogging_openSysSettings':
            setStep('allowKeylogging_grant');
            break;
          case 'allowKeylogging_grant':
            setStep('allowKeylogging_failed');
            break;
          case 'allowKeylogging_failed':
            setStep('allowKeylogging_success');
            break;
          case 'allowKeylogging_success':
            setStep('installSysExt_explain');
            break;
          case 'installSysExt_explain':
            setStep('installSysExt_start');
            break;
          case 'installSysExt_start':
            setStep('installSysExt_allowInstall');
            break;
          case 'installSysExt_allowInstall':
            setStep('installSysExt_allowFiltering');
            break;
          case 'installSysExt_allowFiltering':
            setStep('installSysExt_failed');
            break;
          case 'installSysExt_failed':
            setStep('installSysExt_success');
            break;
          case 'installSysExt_success':
            setStep('locateMenuBarIcon');
            break;
          case 'locateMenuBarIcon':
            setStep('viewHealthCheck');
            break;
          case 'viewHealthCheck':
            setStep('howToUseGertrude');
            break;
          case 'howToUseGertrude':
            setStep('finish');
            break;
          case 'finish':
            setStep('welcome');
            break;
        }
      }}
    >
      <StepSwitcher step={step}>
        <OnboardingPage step="welcome" component={<Step.Welcome emit={() => {}} />} />
        <OnboardingPage
          step="confirmGertrudeAccount"
          component={<Step.ConfirmGertrudeAccount emit={() => {}} />}
        />
        <OnboardingPage
          step="noGertrudeAccount"
          component={<Step.NoGertrudeAccount emit={() => {}} />}
        />
        <OnboardingPage
          step="macosUserAccountType"
          component={
            <Step.MacosUserAccountType
              current={{ id: 502, name: 'Suzy', isAdmin: false }}
              users={[
                { id: 501, name: 'Bob McParent', isAdmin: true },
                { id: 502, name: 'Suzy', isAdmin: false },
              ]}
              emit={() => {}}
            />
          }
          confetti
        />
        <OnboardingPage
          step="getChildConnectionCode"
          component={<Step.GetConnectionCode emit={() => {}} />}
        />
        <OnboardingPage
          step="connectChild"
          component={
            <Step.ConnectChild
              connectionCode={'123-456'}
              request={{ state: `idle` }}
              dispatch={() => {}}
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowNotifications_start"
          component={
            <Step.AllowNotifications
              os={'venturaOrLater'}
              step="allowNotifications_start"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowNotifications_grant"
          component={
            <Step.AllowNotifications
              os={'venturaOrLater'}
              step="allowNotifications_grant"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowScreenshots_required"
          component={
            <Step.AllowScreenshots
              os={'venturaOrLater'}
              step="allowScreenshots_required"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowScreenshots_openSysSettings"
          component={
            <Step.AllowScreenshots
              os={'venturaOrLater'}
              step="allowScreenshots_openSysSettings"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowScreenshots_grantAndRestart"
          component={
            <Step.AllowScreenshots
              os={'venturaOrLater'}
              step="allowScreenshots_grantAndRestart"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowScreenshots_success"
          component={
            <Step.AllowScreenshots
              os={'venturaOrLater'}
              step="allowScreenshots_success"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowKeylogging_required"
          component={
            <Step.AllowKeylogging
              os={'venturaOrLater'}
              step="allowKeylogging_required"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowKeylogging_openSysSettings"
          component={
            <Step.AllowKeylogging
              os={'venturaOrLater'}
              step="allowKeylogging_openSysSettings"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowKeylogging_grant"
          component={
            <Step.AllowKeylogging
              os={'venturaOrLater'}
              step="allowKeylogging_grant"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowKeylogging_failed"
          component={
            <Step.AllowKeylogging
              os={'venturaOrLater'}
              step="allowKeylogging_failed"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="allowKeylogging_success"
          component={
            <Step.AllowKeylogging
              os={'venturaOrLater'}
              step="allowKeylogging_success"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="installSysExt_explain"
          component={
            <Step.InstallSysExt
              os={'venturaOrLater'}
              step="installSysExt_explain"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="installSysExt_start"
          component={
            <Step.InstallSysExt
              os={'venturaOrLater'}
              step="installSysExt_start"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="installSysExt_allowInstall"
          component={
            <Step.InstallSysExt
              os={'venturaOrLater'}
              step="installSysExt_allowInstall"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="installSysExt_allowFiltering"
          component={
            <Step.InstallSysExt
              os={'venturaOrLater'}
              step="installSysExt_allowFiltering"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="installSysExt_failed"
          component={
            <Step.InstallSysExt
              os={'venturaOrLater'}
              step="installSysExt_failed"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="installSysExt_success"
          component={
            <Step.InstallSysExt
              os={'venturaOrLater'}
              step="installSysExt_success"
              emit={() => {}}
            />
          }
        />
        <OnboardingPage
          step="locateMenuBarIcon"
          component={<Step.LocateMenuBarIcon emit={() => {}} />}
        />
        <OnboardingPage
          step="viewHealthCheck"
          component={<Step.ViewHealthCheck emit={() => {}} />}
        />
        <OnboardingPage
          step="howToUseGertrude"
          component={<Step.HowToUseGertrude emit={() => {}} />}
        />
        <OnboardingPage step="finish" component={<Step.Finish emit={() => {}} />} />
      </StepSwitcher>
    </div>
  );
};

export default OnboardingStatefulSwitcher;
