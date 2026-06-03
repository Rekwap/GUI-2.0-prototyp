# Verbleibende Control Panel Ersetzungen

Die folgenden Screens verwenden noch das alte Control-Panel-Format und sollten durch die `ControlPanel`-Komponente ersetzt werden:

1. showUserIdConfirmed
2. showScanUserId
3. showScanPatientId
4. showManualTare
5. showTareAssistant
6. showScanBothIds
7. showServerConnection
8. showNetwork
9. showBsaBmi

Alle diese sollten das folgende Pattern verwenden:

```tsx
<ControlPanel 
  heightMode={heightMode}
  onHeightModeChange={setHeightMode}
  heightRequired={heightRequired}
  onHeightRequiredChange={setHeightRequired}
  installationMode={installationMode}
  onInstallationModeChange={setInstallationMode}
  isMetric={isMetric}
  onIsMetricChange={setIsMetric}
  loginMode={loginMode}
  onLoginModeChange={setLoginMode}
  uniqueId="-[screen-name]"
/>
```

Ersetze den vollständigen `<div className="flex flex-col h-[480px]...` Block durch den ControlPanel-Aufruf.
