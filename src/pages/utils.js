export const sendMessageToBackground = async (message) => {
    try {
        return await chrome.runtime.sendMessage(message)
    } catch (error) {
        console.error(`Error sending message to background: ${error}`)
        return null
    }
}

export const sendMessageToContentScript = async (message) => {
    try {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
        if (!tabs[0]?.id) {
            console.error('No active tab found.')
            return null
        }
        return await chrome.tabs.sendMessage(tabs[0].id, message)
    } catch (error) {
        console.error(`Error sending message to content script: ${error}`)
        return null
    }
}
