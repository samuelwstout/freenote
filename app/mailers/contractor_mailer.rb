class ContractorMailer < ApplicationMailer

    def registration_confirmation(contractor)
        @contractor = contractor
        mail to: contractor.email, subject: "Email confirmation - Freenote"
    end
    
end