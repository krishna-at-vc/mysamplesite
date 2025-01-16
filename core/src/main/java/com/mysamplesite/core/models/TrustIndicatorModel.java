package com.mysamplesite.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.commons.lang3.StringUtils;

import javax.annotation.PostConstruct;

@Model(adaptables = { SlingHttpServletRequest.class, Resource.class }, adapters = {
        TrustIndicatorModel.class }, resourceType = {
                TrustIndicatorModel.RESOURCE_TYPE }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TrustIndicatorModel {
    protected static final String RESOURCE_TYPE = "mysamplesite/components/trustIndicator";

    @ValueMapValue
    private String customerCount;

    @ValueMapValue
    private String trustMessage;

    @ValueMapValue
    private String disclaimerText;

    @PostConstruct
    private void init() {
        // In a real implementation, you would call your API service here
        // to get the actual customer count
        if (StringUtils.isBlank(customerCount)) {
            customerCount = "8,92,50,952"; // Default value for demonstration
        }
    }

    public String getCustomerCount() {
        return customerCount;
    }

    public String getTrustMessage() {
        return trustMessage;
    }

    public String getDisclaimerText() {
        return disclaimerText;
    }

    public boolean isEmpty() {
        return StringUtils.isBlank(customerCount) &&
                StringUtils.isBlank(trustMessage) &&
                StringUtils.isBlank(disclaimerText);
    }
}